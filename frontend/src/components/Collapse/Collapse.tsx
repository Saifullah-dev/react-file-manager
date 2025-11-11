import { useState, useEffect } from "react";
import { useCollapse } from "react-collapsed";

const Collapse = ({ open, children }) => {
  const [isExpanded, setExpanded] = useState(open);
  const { getCollapseProps } = useCollapse({
    isExpanded,
    duration: 500,
  });

  useEffect(() => {
    setExpanded(open);
  }, [open, setExpanded]);

  return (
    <>
      <div {...getCollapseProps()}>{children}</div>
    </>
  );
};

export default Collapse;
