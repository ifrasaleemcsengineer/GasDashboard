import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

const VendorColumns = [
  { field: "id", headerName: "VendorID", width: 150 },
  { field: "Adminid", headerName: "AdminID", width: 150 },
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

const DatatableVendors = () => {
  const [Vendors, setVendors] = useState([]);

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
            <Link to="/vendors/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View more</div>
            </Link>
            
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Vendors
       
      </div>
      <DataGrid
        className="datagrid"
        rows={Vendors}
        columns={VendorColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        
      />
    </div>
  );
};

export default DatatableVendors;
