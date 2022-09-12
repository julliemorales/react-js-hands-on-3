const percentToDecimal = (decimal) => {
  return decimal.toFixed(3) + "%";
};

const calcScore = (total, goal) => {
  return percentToDecimal(total / goal);
};

const markScore = (total, goal) => {
  if (total / goal < 75) {
    return "failed";
  } else {
    return "passed";
  }
};

const CalculateScore = ({ Name, School, total, goal }) => {
  return (
    <div className="row">
      <div className="col">
        <div className="formatstyle">
          <h1>Student Details</h1>
          <div className="Name">
            <b>Name:</b>
            <span>{Name}</span>
          </div>
          <div className="School">
            <b>School:</b>
            <span>{School}</span>
          </div>
          <div className="Total">
            <b>Total:</b>
            <span>{total}</span>
          </div>
          <div className="Score">
            <b>Score:</b>
            <span>{calcScore(total, goal)}</span>
            <span>{markScore(total, goal)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateScore;
