import "./featured.scss";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useState } from "react";

const Featured = () => {
  const [profitPercent, setProfitPercent] = useState(50);
  const [profitValue, setProfitValue] = useState(60);

  return (
    <div className="featured">
      <div className="top">
        <h3 className="title">Total Profit</h3>
      </div>
      <div className="bottom">
        <div
          className="featuredChart"
          style={{ width: "300px", height: "300px" }}
        >
          <CircularProgressbar
            value={profitPercent}
            text={`${profitPercent}%`}
            strokeWidth={5}
            styles={buildStyles({
              textColor: "orange",
              pathColor: "orange",
            })}
          />
        </div>
        <p className="title">Total devices assigned last month</p>
        <p className="amount">${profitValue}</p>
      </div>
    </div>
  );
};

export default Featured;
