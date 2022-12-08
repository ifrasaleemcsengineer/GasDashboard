import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userhistoryColumns, userhistoryRows } from "../../historytablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const HistoryUsers = () => {
  const [data, setData] = useState(userhistoryRows);

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
            <Link to="/users_history/view" style={{ textDecoration: "none" }}>
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
        Users History
        
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userhistoryColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        
      />
    </div>
  );
};

export default HistoryUsers;
