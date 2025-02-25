import "./Progress.scss";
import {injectIntl} from "react-intl";

const Progress = ({ percent = 0, isCanceled = false, isCompleted = false, error, intl }) => {
  return (
    <div role="progressbar" className="fm-progress">
      {!error && (
        <div className="fm-progress-bar">
          <div className="fm-progress-bar-fill" style={{ width: `${percent}%` }}></div>
        </div>
      )}
      {isCanceled ? (
        <span className="fm-upload-canceled">{intl.formatMessage({id: `completed`})}</span>
      ) : error ? (
        <span className="fm-upload-canceled">{error}</span>
      ) : (
        <div className="fm-progress-status">
          <span>{isCompleted ? intl.formatMessage({id: `completed`}) : percent + "% "+intl.formatMessage({id: `completed`})}</span>
        </div>
      )}
    </div>
  );
};

export default injectIntl(Progress);
