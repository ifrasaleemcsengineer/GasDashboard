import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { AdminhistoryColumns, AdminhistoryRows } from "../../historytablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const AdminhistoryColumns = [
  { field: "id", headerName: "AdminID", width: 150 },
  {
    field: "user",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.username}</div>;
    },
  },
  // {
  //   field: "email",
  //   headerName: "Email",
  //   width: 230,
  // },

  {
    field: "age",
    headerName: "No of Devices",
    width: 150,
  },
];
const HistoryAdmins = () => {
  const [adminHistory, setadminHistory] = useState([]);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/admins_history/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              // onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Admins History
        
      </div>
      <DataGrid
        className="datagrid"
        rows={adminHistory}
        columns={AdminhistoryColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        
      />
    </div>
  );
};

export default HistoryAdmins;
