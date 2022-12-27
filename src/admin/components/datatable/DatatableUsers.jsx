import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const DatatableUsers = () => {
  const [users, setUsers] = useState([]);

  const userColumns = [
    { field: "userId", headerName: "UserID", width: 190 },
    { field: "vendorid", headerName: "VendorID", width: 190 },
    {
      field: "name",
      headerName: "Name",
      width: 280,
    },

    {
      field: "noOfDevices",
      headerName: "No of Devices",
      width: 160,
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
            <Link to="/users/view-more" style={{ textDecoration: "none" }}>
              <div className="viewButton">View More</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">Add New Users</div>
      <DataGrid
        className="datagrid"
        rows={users}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default DatatableUsers;
