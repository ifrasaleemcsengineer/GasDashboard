import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { vendorColumns, vendorRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const DatatableVendors = () => {
  const [data, setData] = useState(vendorRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="cellAction">
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
        rows={data}
        columns={vendorColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default DatatableVendors;
