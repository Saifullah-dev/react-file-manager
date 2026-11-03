import { ChangeEvent, useRef } from "react";
import { collectFromFileList, CollectedUpload } from "../utils/collectUploadEntries";

// Hidden file and folder inputs. Open them from a click handler: browsers only show
// the picker when the input is clicked during a user gesture.
export const useUploadInputs = (
  onPick: (upload: CollectedUpload) => void,
  acceptedFileTypes?: string
) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const folderInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const upload = collectFromFileList(e.target.files ?? []);
    // Reset so picking the same files or folder again still fires "change"
    e.target.value = "";
    if (upload.files.length > 0) onPick(upload);
  };

  const inputs = (
    <>
      <input
        ref={fileInputRef}
        type="file"
        className="fm-hidden-input"
        onChange={handleChange}
        accept={acceptedFileTypes}
        multiple
        hidden
      />
      <input
        ref={(input) => {
          folderInputRef.current = input;
          // Not in React's input props, so set it on the element
          if (input) input.webkitdirectory = true;
        }}
        type="file"
        className="fm-hidden-input"
        onChange={handleChange}
        multiple
        hidden
      />
    </>
  );

  return {
    openFilePicker: () => fileInputRef.current?.click(),
    openFolderPicker: () => folderInputRef.current?.click(),
    inputs,
  };
};
