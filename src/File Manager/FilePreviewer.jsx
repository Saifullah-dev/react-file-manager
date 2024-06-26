import { useSelector } from "react-redux";
import FileExplorerAction from "./FileExplorerAction"
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

const imageExtensions = ['jpg', 'jpeg', 'png'];
const iFrameExtensions = ['txt', 'pdf'];

const FilePreviewer = ({ file, showFilePreview, setShowFilePreview, currentPath }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const extension = file.FileName?.split('.')?.pop()?.toLowerCase();
    const practiceId = useSelector((e) => e.show.practiceID);
    const patientId = useSelector((e) => e.show.selectedPatientId);
    const filePath = `${process.env.REACT_APP_APPLICATION_URL}/Patient Documents/${practiceId}/${patientId}/${currentPath === "" ? currentPath + file.FileName : currentPath + '/' + file.FileName}`;

    const handleImageLoad = () => {
        setIsLoading(false); // Loading is complete
        setHasError(false);  // No error
    };

    const handleImageError = () => {
        setIsLoading(false); // Loading is complete
        setHasError(true);   // Error occurred
    };

    return (
        <FileExplorerAction
            heading={file?.name}
            show={showFilePreview}
            setShow={setShowFilePreview}
            dialogClassName={'w-75'}
            contentClassName={'file-previewer'}
        >
            <section className="p-3 h-100">
                {isLoading && <Skeleton className="centered-div h-100" />}
                {
                    hasError &&
                    <div className="centered-div h-100 text-primary-color">
                        <div>Preview Unavaiablle</div>
                    </div>
                }
                {
                    imageExtensions.includes(extension) &&
                    <>
                        <img
                            src={filePath}
                            alt="Preview Unavailable"
                            className={`photo-popup-image ${isLoading ? 'img-loading' : ''}`}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                        />
                    </>
                }
                {
                    iFrameExtensions.includes(extension) &&
                    <>
                        <iframe
                            src={filePath}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            frameborder="0"
                            className={`photo-popup-image ${isLoading ? 'img-loading' : ''}`}
                        ></iframe>
                    </>
                }
                {/* Download File for extensions with no preview */}
            </section>
        </FileExplorerAction>
    )
}

export default FilePreviewer