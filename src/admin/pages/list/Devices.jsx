import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableDevices from "../../components/datatable/datatableDevices";

const Devices = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableDevices />
      </div>
    </div>
  );
};

export default Devices;
