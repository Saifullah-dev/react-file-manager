import "./Progress.scss";

const Progress = ({ percent = 0, isCanceled = false, isCompleted = false }) => {
  return (
    <div role="progressbar" className="fm-progress">
      <div className="fm-progress-bar">
        <div className="fm-progress-bar-fill" style={{ width: `${percent}%` }}></div>
      </div>
      {isCanceled ? (
        <span className="fm-upload-canceled">Canceled</span>
      ) : (
        <div className="fm-progress-status">
          <span>{isCompleted ? "Completed" : percent + "% done"}</span>
        </div>
      )}
    </div>
  );
};

export default Progress;
