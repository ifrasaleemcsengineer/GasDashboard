import "../list/list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

const UsersHistory = () => {
  const [data, setData] = useState([]);

   const userHistoryColumn = [
    { field: "id", headerName: "UserID", width: 190 },
    { field: "vendorid", headerName: "VendorID", width: 190 },
    {
      field: "user",
      headerName: "Name",
      width: 250,
      renderCell: (params) => {
        return <div className="cellWithImg">{params.row.username}</div>;
      },
    },
   
    {
      field: "age",
      headerName: "No of Devices",
      width: 150,
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users_history/view" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">Users History</div>
          <DataGrid
            className="datagrid"
            rows={data}
            columns={userHistoryColumn.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
          />
        </div>      </div>
    </div>
  );
};

export default UsersHistory;
