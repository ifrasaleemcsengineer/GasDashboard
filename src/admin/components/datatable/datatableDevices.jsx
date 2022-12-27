import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

const DatatableDevices = () => {
  const [device, setDevice] = useState([]);

  const handleDelete = (id) => {
    setDevice(device.filter((item) => item.id !== id));
  };

  const deviceColumns = [
    { field: "id", headerName: "DeviceID", width: 150 },
    { field: "battery", headerName: "Battery", width: 150 },
    {
      field: "weight",
      headerName: "Weight",
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
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "assignedTo",
      headerName: "Assignedf to",
      width: 150,
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 350,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/devices/update" style={{ textDecoration: "none" }}>
              <div className="viewButton">Update</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
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
        Devices
        <Link to="/devices/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={device}
        columns={deviceColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default DatatableDevices;
