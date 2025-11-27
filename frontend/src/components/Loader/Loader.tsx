import { ImSpinner2 } from "react-icons/im";
import "./Loader.scss";

interface LoaderProps {
  loading?: boolean;
  className?: string;
}

const Loader = ({ loading = false, className } : LoaderProps) => {
  if (!loading) return null;

  return (
    <div className={`loader-container ${className}`}>
      <ImSpinner2 className="spinner" />
    </div>
  );
};

export default Loader;
