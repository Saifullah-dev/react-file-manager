import { useRef, useState } from "react";

export const useColumnResize = (col1Size, col2Size) => {
  const [colSizes, setColSizes] = useState({ col1: col1Size, col2: col2Size });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    // Prevent text selection during drag
    e.preventDefault();

    // Calculate new sizes based on mouse movement
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const newCol1Size = ((e.clientX - containerRect.left) / containerRect.width) * 100;

    // Limiting the resizing to 15% to 60% for better UX
    if (newCol1Size >= 15 && newCol1Size <= 60) {
      setColSizes({ col1: newCol1Size, col2: 100 - newCol1Size });
    }
  };

  return {
    containerRef,
    colSizes,
    setColSizes,
    isDragging,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  };
};
