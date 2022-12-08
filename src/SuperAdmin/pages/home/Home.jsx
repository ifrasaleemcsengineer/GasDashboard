import Sidebar from "../../components/supersidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
// import  PieChart  from "../../components/chart/PieChart";
import Table from "../../components/table/Table";
import  PieChart  from "../../components/chart/PieChart";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="admin" />
          <Widget type="vendor" />
          <Widget type="user" />
        
        </div>
        <div className="charts">
        <Featured />
        <PieChart />
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
        

      
    </div>
    </div>
    </div>
  );
};

export default Home;
