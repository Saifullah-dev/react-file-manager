import { FaRegFileImage, FaRegFileLines, FaRegFilePdf, FaRegFileWord } from "react-icons/fa6";

export const useFileIcons = (size) => {
  const fileIcons = {
    pdf: <FaRegFilePdf size={size} />,
    jpg: <FaRegFileImage size={size} />,
    jpeg: <FaRegFileImage size={size} />,
    png: <FaRegFileImage size={size} />,
    txt: <FaRegFileLines size={size} />,
    doc: <FaRegFileWord size={size} />,
    docx: <FaRegFileWord size={size} />,
  };

  return fileIcons;
};
