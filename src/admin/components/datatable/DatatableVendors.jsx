import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

const DatatableVendors = () => {
  const [vendors, setVendors] = useState([]);

  const handleDelete = (id) => {
    setVendors(vendors.filter((item) => item.id !== id));
  };

   const vendorColumns = [
    { field: "id", headerName: "VendorID", width: 190 },
    {
      field: "user",
      headerName: "Name",
      width: 280,
      renderCell: (params) => {
        return <div className="cellWithImg">{params.row.username}</div>;
      },
    },
  
    {
      field: "age",
      headerName: "No of Devices",
      width: 200,
    },
  ];
   const userRows = [
    {
      id: 1,  
      user: "Snow",
      // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
     
      age: 35,
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/vendors/assign" style={{ textDecoration: "none" }}>
              <div className="viewButton">Assign Devices</div>
              </Link>
            <Link to="/vendors/view-more" style={{ textDecoration: "none" }}>
              <div className="viewButton">View More</div>
            </Link>
            <Link to="/vendors/update" style={{ textDecoration: "none" }}>
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
        Add New Vendors
        <Link to="/vendors/new" className="link-new">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={userRows}
        columns={vendorColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default DatatableVendors;
