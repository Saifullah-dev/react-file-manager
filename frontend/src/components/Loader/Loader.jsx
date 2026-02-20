import { ImSpinner2 } from "react-icons/im";
import "./Loader.scss";

const Loader = ({ loading = false, className }) => {
  if (!loading) return null;

  return (
    <div className={`loader-container ${className}`} role="status" aria-label="Loading" aria-live="polite">
      <ImSpinner2 className="spinner" />
    </div>
  );
};

export default Loader;
