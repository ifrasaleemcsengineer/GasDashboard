import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

const userhistoryColumns = [
  { field: "id", headerName: "UserID", width: 150 },
  { field: "Vendorid", headerName: "VendorID", width: 150 },
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

const HistoryUsers = () => {
  const [userHistory, setuserHistory] = useState([]);

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
            <Link to="/users_history/view" style={{ textDecoration: "none" }}>
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
        Users History
        
      </div>
      <DataGrid
        className="datagrid"
        rows={userHistory}
        columns={userhistoryColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        
      />
    </div>
  );
};

export default HistoryUsers;
