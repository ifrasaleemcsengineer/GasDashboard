import "./list.scss";
import Sidebar from "../../components/supersidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableAdmins from "../../components/datatable/DatatableAdmins";

const Admins = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableAdmins/>
      </div>
    </div>
  );
};

export default Admins;
