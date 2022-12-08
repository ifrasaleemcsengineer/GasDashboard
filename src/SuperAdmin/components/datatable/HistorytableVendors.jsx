import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { VendorhistoryColumns, VendorhistoryRows } from "../../historytablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const HistoryVendors = () => {
  const [data, setData] = useState(VendorhistoryRows);

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
            <Link to="/vendors_history/view" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
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
        Vendors History
        
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={VendorhistoryColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        
      />
    </div>
  );
};

export default HistoryVendors;
