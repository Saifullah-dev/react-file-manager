import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { getFileExtension } from "../../utils/getFileExtension";

const imageExtensions = ["jpg", "jpeg", "png"];
const videoExtensions = ["mp4", "mov", "avi"];
const audioExtensions = ["mp3", "wav", "m4a"];
const iFrameExtensions = ["txt", "pdf"];

const FilePreviewer = ({ file, showFilePreview, setShowFilePreview }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const extension = getFileExtension(file.name)?.toLowerCase();
  const filePath = `${import.meta.env.VITE_API_FILES_BASE_URL}${file.path}`;

  const handleImageLoad = () => {
    setIsLoading(false); // Loading is complete
    setHasError(false); // No error
  };

  const handleImageError = () => {
    setIsLoading(false); // Loading is complete
    setHasError(true); // Error occurred
  };

  if (showFilePreview) {
    return (
      <Modal
        heading={file.name}
        show={showFilePreview}
        setShow={setShowFilePreview}
        dialogWidth={"50%"}
      >
        <section className={`file-previewer ${extension === "pdf" ? "pdf-previewer" : ""}`}>
          {/* {isLoading && <h2 className="text-primary-color">Loading...</h2>} */}
          {hasError && (
            <div className="centered-div h-100 text-primary-color">
              <div>Preview Unavaiablle</div>
            </div>
          )}
          {imageExtensions.includes(extension) && (
            <>
              <img
                src={filePath}
                alt="Preview Unavailable"
                className={`photo-popup-image ${isLoading ? "img-loading" : ""}`}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            </>
          )}
          {videoExtensions.includes(extension) && (
            <video src={filePath} className="video-preview" controls autoPlay />
          )}
          {audioExtensions.includes(extension) && (
            <audio src={filePath} controls autoPlay className="audio-preview" />
          )}
          {iFrameExtensions.includes(extension) && (
            <>
              <iframe
                src={filePath}
                onLoad={handleImageLoad}
                onError={handleImageError}
                frameBorder="0"
                className={`photo-popup-iframe ${isLoading ? "img-loading" : ""}`}
              ></iframe>
            </>
          )}
          {/* Download File for extensions with no preview */}
        </section>
      </Modal>
    );
  }
};

export default FilePreviewer;
