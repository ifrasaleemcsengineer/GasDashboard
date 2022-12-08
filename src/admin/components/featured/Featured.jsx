import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h3 className="title">Total Profit</h3>
      </div>
      <div className="bottom">
        <div className="featuredChart" style={{ width: 300, height: 300 }}>
          <CircularProgressbar
            value={70}
            text={"70%"}
            strokeWidth={5}
            styles={buildStyles({
              textColor: "orange",
              pathColor: "orange",
            })}
          />
        </div>
        <p className="title">Total profit made last month</p>
        <p className="amount">420 PKR</p>
      </div>
    </div>
  );
};

export default Featured;
