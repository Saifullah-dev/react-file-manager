import { useState, useCallback, useMemo, createContext, useContext, useEffect, useRef } from "react";
import { MdClose, MdCheckCircle, MdError, MdWarning, MdInfo } from "react-icons/md";
import "./Toast.scss";

const ToastContext = createContext(null);

const TOAST_ICONS = {
  success: <MdCheckCircle size={20} />,
  error: <MdError size={20} />,
  warning: <MdWarning size={20} />,
  info: <MdInfo size={20} />,
};

const MAX_TOASTS = 3;
const DEFAULT_DURATION = 4000;

let toastId = 0;

const ToastItem = ({ toast, onDismiss }) => {
  const [isExiting, setIsExiting] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (toast.duration !== 0) {
      timerRef.current = setTimeout(() => {
        handleDismiss();
      }, toast.duration || DEFAULT_DURATION);
    }
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => onDismiss(toast.id), 200);
  };

  return (
    <div
      className={`fm-toast fm-toast-${toast.type} ${isExiting ? "fm-toast-exit" : "fm-toast-enter"}`}
      role="alert"
      aria-live="assertive"
    >
      <div className="fm-toast-icon">{TOAST_ICONS[toast.type]}</div>
      <div className="fm-toast-content">
        <span className="fm-toast-message">{toast.message}</span>
      </div>
      {toast.action && (
        <button className="fm-toast-action" onClick={toast.action.onClick}>
          {toast.action.label}
        </button>
      )}
      <button className="fm-toast-close" onClick={handleDismiss} aria-label="Dismiss notification">
        <MdClose size={16} />
      </button>
    </div>
  );
};

export const ToastProvider = ({ children, position = "bottom-right" }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(({ type = "info", message, duration = DEFAULT_DURATION, action }) => {
    const id = ++toastId;
    setToasts((prev) => {
      const newToasts = [...prev, { id, type, message, duration, action }];
      return newToasts.slice(-MAX_TOASTS);
    });
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useMemo(
    () => ({
      success: (message, opts) => addToast({ type: "success", message, ...opts }),
      error: (message, opts) => addToast({ type: "error", message, ...opts }),
      warning: (message, opts) => addToast({ type: "warning", message, ...opts }),
      info: (message, opts) => addToast({ type: "info", message, ...opts }),
    }),
    [addToast]
  );

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {toasts.length > 0 && (
        <div className={`fm-toast-container fm-toast-${position}`}>
          {toasts.map((t) => (
            <ToastItem key={t.id} toast={t} onDismiss={removeToast} />
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
