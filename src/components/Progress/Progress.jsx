import "./Progress.scss";

const Progress = ({ percent = 0 }) => {
  return (
    <div role="progressbar" className="fm-progress">
      <div className="fm-progress-bar">
        <div className="fm-progress-bar-fill" style={{ width: `${percent}%` }}></div>
      </div>
      <div className="fm-progress-status">{percent}% done</div>
    </div>
  );
};

export default Progress;
