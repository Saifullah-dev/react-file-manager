import { createContext, useContext, useReducer, useCallback } from "react";

const MAX_HISTORY = 50;

const UndoRedoContext = createContext();

const initialState = {
  past: [],
  future: [],
};

function undoRedoReducer(state, action) {
  switch (action.type) {
    case "PUSH_ACTION": {
      const newPast = [...state.past, action.payload].slice(-MAX_HISTORY);
      return {
        past: newPast,
        future: [], // Clear future on new action
      };
    }
    case "UNDO": {
      if (state.past.length === 0) return state;
      const previous = state.past[state.past.length - 1];
      const newPast = state.past.slice(0, -1);
      return {
        past: newPast,
        future: [previous, ...state.future],
      };
    }
    case "REDO": {
      if (state.future.length === 0) return state;
      const next = state.future[0];
      const newFuture = state.future.slice(1);
      return {
        past: [...state.past, next],
        future: newFuture,
      };
    }
    case "CLEAR": {
      return initialState;
    }
    default:
      return state;
  }
}

export const UndoRedoProvider = ({ children, onUndo, onRedo }) => {
  const [state, dispatch] = useReducer(undoRedoReducer, initialState);

  const pushAction = useCallback((action) => {
    dispatch({
      type: "PUSH_ACTION",
      payload: {
        ...action,
        timestamp: Date.now(),
      },
    });
  }, []);

  const undo = useCallback(() => {
    if (state.past.length === 0) return;
    const action = state.past[state.past.length - 1];
    dispatch({ type: "UNDO" });
    onUndo?.(action);
  }, [state.past, onUndo]);

  const redo = useCallback(() => {
    if (state.future.length === 0) return;
    const action = state.future[0];
    dispatch({ type: "REDO" });
    onRedo?.(action);
  }, [state.future, onRedo]);

  const clear = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const canUndo = state.past.length > 0;
  const canRedo = state.future.length > 0;

  return (
    <UndoRedoContext.Provider
      value={{
        pushAction,
        undo,
        redo,
        clear,
        canUndo,
        canRedo,
        pastActions: state.past,
        futureActions: state.future,
      }}
    >
      {children}
    </UndoRedoContext.Provider>
  );
};

export const useUndoRedo = () => useContext(UndoRedoContext);
