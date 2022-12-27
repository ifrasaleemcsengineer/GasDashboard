import Chart from "react-apexcharts";
import React, { useState } from "react";
import "./PieChart.css";
function Piechart() {
  const [Admins, setAdmins] = useState(20)
  const [Vendors, setVendors] = useState(20)
  const [Users, setUsers] = useState(20)
  return (
    <React.Fragment>
      <div className="column-chart">
        <h3 className="chart-heading">Total Subscribers</h3>
        <Chart
          className="column-piechart"
          type="pie"
          width={500}
          height={550}
          series={[Admins, Vendors, Users]}
          options={{
            colors:["#F0E68C","#FFFF00","#FFA500"],
            labels: ["Admins", "Vendors", "Users"],
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}
export default Piechart;