import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableUsers from "../../components/datatable/DatatableUsers";

const Users = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableUsers />
      </div>
    </div>
  );
};

export default Users;
