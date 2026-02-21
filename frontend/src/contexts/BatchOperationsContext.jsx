import { createContext, useCallback, useContext, useMemo, useReducer } from "react";

const BatchOperationsContext = createContext();

function batchReducer(state, action) {
  switch (action.type) {
    case "START_BATCH":
      return {
        ...state,
        isActive: true,
        operationType: action.operationType,
        items: action.items.map((item, index) => ({
          ...item,
          id: index,
          status: "pending",
          progress: 0,
        })),
        overallProgress: 0,
        completed: 0,
        failed: 0,
        skipped: 0,
        cancelled: false,
      };
    case "UPDATE_ITEM": {
      const items = state.items.map((item) =>
        item.id === action.itemId ? { ...item, ...action.updates } : item
      );
      const completed = items.filter((i) => i.status === "completed").length;
      const failed = items.filter((i) => i.status === "failed").length;
      const skipped = items.filter((i) => i.status === "skipped").length;
      const done = completed + failed + skipped;
      const overallProgress = items.length > 0 ? Math.round((done / items.length) * 100) : 0;
      return { ...state, items, completed, failed, skipped, overallProgress };
    }
    case "CANCEL_BATCH":
      return {
        ...state,
        cancelled: true,
        items: state.items.map((item) =>
          item.status === "pending" ? { ...item, status: "skipped" } : item
        ),
      };
    case "CLOSE_BATCH":
      return {
        ...state,
        isActive: false,
        operationType: null,
        items: [],
        overallProgress: 0,
        completed: 0,
        failed: 0,
        skipped: 0,
        cancelled: false,
      };
    default:
      return state;
  }
}

const initialState = {
  isActive: false,
  operationType: null,
  items: [],
  overallProgress: 0,
  completed: 0,
  failed: 0,
  skipped: 0,
  cancelled: false,
};

export const BatchOperationsProvider = ({ children, onOperationProgress }) => {
  const [state, dispatch] = useReducer(batchReducer, initialState);

  const startBatch = useCallback(
    (operationType, items) => {
      dispatch({ type: "START_BATCH", operationType, items });
      onOperationProgress?.({
        type: "start",
        operationType,
        totalItems: items.length,
      });
    },
    [onOperationProgress]
  );

  const updateItem = useCallback(
    (itemId, updates) => {
      dispatch({ type: "UPDATE_ITEM", itemId, updates });
      onOperationProgress?.({
        type: "progress",
        itemId,
        ...updates,
      });
    },
    [onOperationProgress]
  );

  const cancelBatch = useCallback(() => {
    dispatch({ type: "CANCEL_BATCH" });
    onOperationProgress?.({ type: "cancel" });
  }, [onOperationProgress]);

  const closeBatch = useCallback(() => {
    dispatch({ type: "CLOSE_BATCH" });
    onOperationProgress?.({ type: "close" });
  }, [onOperationProgress]);

  const value = useMemo(
    () => ({
      ...state,
      startBatch,
      updateItem,
      cancelBatch,
      closeBatch,
    }),
    [state, startBatch, updateItem, cancelBatch, closeBatch]
  );

  return (
    <BatchOperationsContext.Provider value={value}>
      {children}
    </BatchOperationsContext.Provider>
  );
};

export const useBatchOperations = () => useContext(BatchOperationsContext);
