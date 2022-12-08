import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import  PieChart  from "../../components/chart/PieChart";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="vendor" />
          <Widget type="user" />
          <Widget type="devices" />
        </div>
        
          <div className="charts">
          <Featured />
        <PieChart />
          {/* <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
           <Table />
           </div> */}
        
        {/* <BarChart /> */}
      </div>
    </div>
  );
};

export default Home;
