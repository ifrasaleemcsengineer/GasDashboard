import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableVendors from "../../components/datatable/DatatableVendors";

const Vendors = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableVendors />
      </div>
    </div>
  );
};

export default Vendors;
