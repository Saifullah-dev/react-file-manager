import { useState, useEffect, ReactNode } from "react";
import { useCollapse } from "react-collapsed";

export interface CollapseProps {
  open: boolean;
  children: ReactNode
}

const Collapse = ({ open, children } : CollapseProps) => {
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
