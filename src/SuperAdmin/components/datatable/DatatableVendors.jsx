import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { VendorColumns, VendorRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const DatatableVendors = () => {
  const [data, setData] = useState(VendorRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

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
        rows={data}
        columns={VendorColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        
      />
    </div>
  );
};

export default DatatableVendors;
