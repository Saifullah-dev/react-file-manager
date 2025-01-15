from fastapi import FastAPI, UploadFile, File, HTTPException, Form, Query
from pydantic import BaseModel
from typing import List
import os
import shutil
from fastapi.responses import FileResponse
import zipfile
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from fastapi import HTTPException
from pathlib import Path
from typing import Optional

# add cors, all origins
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Base upload directory
BASE_DIR = os.path.curdir
if not os.path.exists(BASE_DIR):
    os.makedirs(BASE_DIR)

# Pydantic Model for folder creation
class CreateFolderRequest(BaseModel):
    name: str
    parentId: str | None = None  # Optional parent folder

# 📁 Create a Folder
@app.post("/folder")
def create_folder(request: CreateFolderRequest):
    """
    Create a folder using JSON payload.
    """
    # Resolve folder path
    parent_path = request.parentId or ""
    folder_path = os.path.join(BASE_DIR, parent_path, request.name)

    # Check if folder already exists
    if os.path.exists(folder_path):
        raise HTTPException(status_code=400, detail="Folder already exists")

    # Create folder
    try:
        os.makedirs(folder_path, exist_ok=True)
        return {"message": f"Folder '{request.name}' created successfully", "path": folder_path}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

class FileSystemItem(BaseModel):
    name: str
    isDirectory: bool
    path: str
    size: int = None
    mimeType: str = None


# Utility: List files/folders
import os

def list_items(base_path: str) -> List[dict]:
    """
    List files and directories under the given base path.
    Appends '/' at the start of paths and generates preview URLs.
    """
    items = []
    for root, dirs, files in os.walk(base_path):
        for name in dirs + files:
            # Full path and relative path
            full_path = os.path.join(root, name)
            relative_path = os.path.relpath(full_path, BASE_DIR)

            # Add '/' at the start of the path
            formatted_path = f"/{relative_path.replace(os.path.sep, '/')}"  

            # Generate file preview URL if it's a file
            preview_url = None
            if os.path.isfile(full_path):  # Skip unsupported files
                preview_url = "/preview"+formatted_path

            # Append file/folder details to the list
            items.append({
                "name": name,
                "isDirectory": os.path.isdir(full_path),
                "path": formatted_path,  # Path starts with '/'
                "size": os.path.getsize(full_path) if os.path.isfile(full_path) else None,
                "filePreviewPath": preview_url  # Optional preview URL for supported files
            })
    return items


@app.get("/preview/{file_path:path}")
def preview_file(file_path: str):
    """
    Provides file previews by serving the file from disk.
    - `file_path` is the relative path to the file within BASE_DIR.
    """
    # Resolve the absolute file path
    absolute_path = BASE_DIR / file_path

    # Check if the file exists and is a file
    if not absolute_path.exists() or not absolute_path.is_file():
        raise HTTPException(status_code=404, detail="File not found")

    # Optionally: Prevent serving unsupported file types
    unsupported_extensions = [".js"]
    if absolute_path.suffix in unsupported_extensions:
        raise HTTPException(status_code=400, detail="File type not supported for preview")

    # Serve the file
    return FileResponse(absolute_path, filename=absolute_path.name)

# 📂 Get All Files/Folders
@app.get("/")
def get_items(path: str = ""):
    directory = os.path.join(BASE_DIR, path)
    if not os.path.exists(directory):
        raise HTTPException(status_code=404, detail="Path not found")
    return list_items(directory)


# ⬆️ Upload a File

@app.post("/upload")
def upload_file(file: UploadFile = File(...), target_path: Optional[str] = Form("")):
    """
    Upload a file to the specified target directory.
    - `file`: The file being uploaded.
    - `target_path`: The relative path where the file should be uploaded.
    """
    # Resolve target directory
    upload_dir = BASE_DIR / target_path
    upload_dir.mkdir(parents=True, exist_ok=True)  # Create directory if it doesn't exist

    # Save the uploaded file
    file_location = upload_dir / file.filename
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {"message": f"File '{file.filename}' uploaded successfully", "path": str(file_location)}

# 📋 Copy File(s) or Folder(s)
@app.post("/copy")
def copy_item(source: str = Form(...), destination: str = Form(...)):
    src = BASE_DIR / source
    dest = BASE_DIR / destination / src.name
    if not src.exists():
        raise HTTPException(status_code=404, detail="Source not found")
    if dest.exists():
        raise HTTPException(status_code=400, detail="Destination already exists")
    if src.is_dir():
        shutil.copytree(src, dest)
    else:
        shutil.copy2(src, dest)
    return {"message": "Item copied successfully", "destination": str(dest)}


# 📤 Move File(s) or Folder(s)
@app.put("/move")
def move_item(source: str = Form(...), destination: str = Form(...)):
    src = BASE_DIR / source
    dest = BASE_DIR / destination / src.name
    if not src.exists():
        raise HTTPException(status_code=404, detail="Source not found")
    shutil.move(src, dest)
    return {"message": "Item moved successfully", "destination": str(dest)}


# ✏️ Rename a File or Folder
@app.patch("/rename")
def rename_item(source: str = Form(...), new_name: str = Form(...)):
    src = BASE_DIR / source
    new_path = src.parent / new_name
    if not src.exists():
        raise HTTPException(status_code=404, detail="Source not found")
    src.rename(new_path)
    return {"message": "Item renamed successfully", "new_path": str(new_path)}


# 🗑️ Delete File(s) or Folder(s)
@app.delete("/")
def delete_item(paths: List[str]):
    for path in paths:
        target = BASE_DIR / path
        if not target.exists():
            raise HTTPException(status_code=404, detail=f"Path '{path}' not found")
        if target.is_dir():
            shutil.rmtree(target)
        else:
            target.unlink()
    return {"message": "Item(s) deleted successfully"}


# ⬇️ Download File(s) or Folder(s)
@app.get("/download//{path:path}")
def download_file(path: str):
    target = os.path.join(BASE_DIR, path.lstrip("/"))
    if not os.path.exists(target):
        raise HTTPException(status_code=404, detail="File/Folder not found")
    if os.path.isfile(target):
        return FileResponse(target, filename=target)
    # If it's a folder, zip it and send
    # Assuming target is a string representing the path
    zip_path = target + ".zip"
    with zipfile.ZipFile(zip_path, "w") as zipf:
        for root, _, files in os.walk(target):
            for file in files:
                full_path = os.path.join(root, file)
                arcname = os.path.relpath(full_path, os.path.dirname(target))
                zipf.write(full_path, arcname=arcname)
    return FileResponse(zip_path, filename=os.path.basename(zip_path))

uvicorn.run(app, host="localhost", port=4000)
