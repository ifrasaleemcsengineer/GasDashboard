import "../list/list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import { VendorHistoryColumns, VendorHistoryRows } from "../../historydata";
import { Link } from "react-router-dom";
import { useState } from "react";

const VendorsHistory = () => {
  const [data, setData] = useState(VendorHistoryRows);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 350,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/vendors_history/view" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">Vendors History</div>
          <DataGrid
            className="datagrid"
            rows={data}
            columns={VendorHistoryColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
          />
        </div>
      </div>
    </div>
  );
};

export default VendorsHistory;
