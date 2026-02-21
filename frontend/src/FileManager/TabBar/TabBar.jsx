import { useRef, useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";
import { useTabs } from "../../contexts/TabsContext";
import { useTranslation } from "../../contexts/TranslationProvider";
import "./TabBar.scss";

const TabBar = () => {
  const { tabs, activeTabId, addTab, closeTab, setActiveTab, reorderTabs, canAddTab } = useTabs();
  const t = useTranslation();
  const dragTabRef = useRef(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const handleTabDragStart = (e, index) => {
    dragTabRef.current = index;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", String(index));
  };

  const handleTabDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverIndex(index);
  };

  const handleTabDrop = (e, toIndex) => {
    e.preventDefault();
    const fromIndex = dragTabRef.current;
    if (fromIndex != null && fromIndex !== toIndex) {
      reorderTabs(fromIndex, toIndex);
    }
    dragTabRef.current = null;
    setDragOverIndex(null);
  };

  const handleTabDragEnd = () => {
    dragTabRef.current = null;
    setDragOverIndex(null);
  };

  const handleCloseTab = (e, tabId) => {
    e.stopPropagation();
    closeTab(tabId);
  };

  const handleMiddleClick = (e, tabId) => {
    if (e.button === 1) {
      e.preventDefault();
      closeTab(tabId);
    }
  };

  return (
    <div className="fm-tab-bar" role="tablist" aria-label="File manager tabs">
      <div className="fm-tab-list">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            role="tab"
            aria-selected={tab.id === activeTabId}
            className={`fm-tab ${tab.id === activeTabId ? "fm-tab-active" : ""} ${
              dragOverIndex === index ? "fm-tab-drag-over" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
            onMouseDown={(e) => handleMiddleClick(e, tab.id)}
            draggable
            onDragStart={(e) => handleTabDragStart(e, index)}
            onDragOver={(e) => handleTabDragOver(e, index)}
            onDrop={(e) => handleTabDrop(e, index)}
            onDragEnd={handleTabDragEnd}
            title={tab.path || t("home")}
          >
            <span className="fm-tab-label">{tab.label || t("home")}</span>
            {tabs.length > 1 && (
              <button
                className="fm-tab-close"
                onClick={(e) => handleCloseTab(e, tab.id)}
                aria-label={`Close ${tab.label || "tab"}`}
                tabIndex={-1}
              >
                <MdClose size={14} />
              </button>
            )}
          </div>
        ))}
      </div>
      {canAddTab && (
        <button
          className="fm-tab-add"
          onClick={() => addTab()}
          aria-label="Open new tab"
          title="New tab"
        >
          <MdAdd size={16} />
        </button>
      )}
    </div>
  );
};

TabBar.displayName = "TabBar";

export default TabBar;
