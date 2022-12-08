import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { AdminColumns, AdminRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const DatatableAdmins = () => {
  const [data, setData] = useState(AdminRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 350,
      renderCell: (params) => {
        return (
          
          <div className="cellAction">
            <Link to="/admin/update" style={{ textDecoration: "none" }}>
              <div className="viewButton">Update</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
            
            <Link to="/admin/test" style={{ textDecoration: "none"}}>
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
       Admins
        <Link to="/admin/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={AdminColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default DatatableAdmins;
