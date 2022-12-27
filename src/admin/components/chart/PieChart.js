import Chart from "react-apexcharts";
import React, { useState } from "react";
import "./PieChart.css";
function Piechart() {
  const [devices, setDevices] = useState(33.33);
  const [vendors, setVendors] = useState(33.33);
  const [users, setUsers] = useState(33.33);
  return (
    <React.Fragment>
      <div className="column-chart">
        <h3 className="chart-heading">Total Subscribers</h3>
        <Chart
          className="column-piechart"
          type="pie"
          width={500}
          height={550}
          series={[vendors, users , devices]}
          options={{
            colors: ["#F0E68C", "#FFFF00", "#FFA500"],
            labels: ["Vendors", "Users", "Devices"],
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}
export default Piechart;
