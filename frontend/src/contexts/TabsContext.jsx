import { createContext, useCallback, useContext, useMemo, useReducer } from "react";

const TabsContext = createContext();

let nextTabId = 1;

function createTab(path = "", label = "Home") {
  return {
    id: nextTabId++,
    path,
    label: label || "Home",
    sortConfig: { key: "name", direction: "asc" },
  };
}

function tabsReducer(state, action) {
  switch (action.type) {
    case "ADD_TAB": {
      if (state.tabs.length >= state.maxTabs) return state;
      const newTab = createTab(action.path, action.label);
      const tabs = [...state.tabs, newTab];
      return { ...state, tabs, activeTabId: newTab.id };
    }
    case "CLOSE_TAB": {
      if (state.tabs.length <= 1) return state;
      const tabs = state.tabs.filter((t) => t.id !== action.tabId);
      let activeTabId = state.activeTabId;
      if (activeTabId === action.tabId) {
        const closedIndex = state.tabs.findIndex((t) => t.id === action.tabId);
        activeTabId = tabs[Math.min(closedIndex, tabs.length - 1)].id;
      }
      return { ...state, tabs, activeTabId };
    }
    case "SET_ACTIVE_TAB":
      return { ...state, activeTabId: action.tabId };
    case "UPDATE_TAB": {
      const tabs = state.tabs.map((t) =>
        t.id === action.tabId ? { ...t, ...action.updates } : t
      );
      return { ...state, tabs };
    }
    case "REORDER_TABS": {
      const tabs = [...state.tabs];
      const [moved] = tabs.splice(action.fromIndex, 1);
      tabs.splice(action.toIndex, 0, moved);
      return { ...state, tabs };
    }
    default:
      return state;
  }
}

export const TabsProvider = ({ children, maxTabs = 10, onTabChange }) => {
  const [state, dispatch] = useReducer(tabsReducer, {
    tabs: [createTab()],
    activeTabId: 1,
    maxTabs,
  });

  const activeTab = useMemo(
    () => state.tabs.find((t) => t.id === state.activeTabId) || state.tabs[0],
    [state.tabs, state.activeTabId]
  );

  const addTab = useCallback(
    (path = "", label) => {
      if (state.tabs.length >= maxTabs) return;
      dispatch({ type: "ADD_TAB", path, label });
      onTabChange?.({ type: "add", path });
    },
    [state.tabs.length, maxTabs, onTabChange]
  );

  const closeTab = useCallback(
    (tabId) => {
      if (state.tabs.length <= 1) return;
      dispatch({ type: "CLOSE_TAB", tabId });
      onTabChange?.({ type: "close", tabId });
    },
    [state.tabs.length, onTabChange]
  );

  const setActiveTab = useCallback(
    (tabId) => {
      dispatch({ type: "SET_ACTIVE_TAB", tabId });
      const tab = state.tabs.find((t) => t.id === tabId);
      onTabChange?.({ type: "switch", tabId, path: tab?.path });
    },
    [state.tabs, onTabChange]
  );

  const updateTab = useCallback((tabId, updates) => {
    dispatch({ type: "UPDATE_TAB", tabId, updates });
  }, []);

  const reorderTabs = useCallback((fromIndex, toIndex) => {
    dispatch({ type: "REORDER_TABS", fromIndex, toIndex });
  }, []);

  const value = useMemo(
    () => ({
      tabs: state.tabs,
      activeTab,
      activeTabId: state.activeTabId,
      addTab,
      closeTab,
      setActiveTab,
      updateTab,
      reorderTabs,
      canAddTab: state.tabs.length < maxTabs,
    }),
    [state.tabs, activeTab, state.activeTabId, addTab, closeTab, setActiveTab, updateTab, reorderTabs, maxTabs]
  );

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

export const useTabs = () => useContext(TabsContext);
