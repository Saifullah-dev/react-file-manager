import "./Loader.scss";
import ReactLoading from "react-loading";

const Loader = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="fm-loader">
        <ReactLoading color="black" type="spokes" height={50} width={50} />
      </div>
    );
  }
};

export default Loader;
