import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

const DeviceColumns = [
  { field: "id", headerName: "DeviceID", width: 150 },
  {
    field: "Battery",
    headerName: "Battery",
    width: 230,
    
  },
  
  {
    field: "Weight",
    headerName: "Weight",
    width: 150,
  },

  {
    field: "Status",
    headerName: "Status",
    width: 150,
  },
  {
    field: "Assigned",
    headerName: "Assigned to",
    width: 150,
  },
  
];

const DatatableDevices = () => {

  const [Devices, setDevices] = useState([]);

  // const handleDelete = (id) => {
  //   setDevices(Devices.filter((item) => item.id !== id));
  // };

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
       Devices
        <Link to="/devices/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={Devices}
        columns={DeviceColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default DatatableDevices;
