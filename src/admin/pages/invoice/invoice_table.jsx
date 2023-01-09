import "./invoice.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";

const InvoiceTable = () => {
  const [vendors, setVendors] = useState([]);

  const handleDelete = (id) => {
    setVendors(vendors.filter((item) => item.id !== id));
  };

   const vendorColumns = [
    { field: "id", headerName: "Invoice No", width: 190 },
    {
      field: "status",
      headerName: "Status",
      width: 280,
      
    },
  
    {
      field: "amount",
      headerName: "Amount",
      width: 200,
    },
  ];
   const userRows = [
    {
      id: 1,  
      status: "Assigned",     
      amount: 35,
    },
    {
        id: 2,  
        status: "Assigned",     
        amount: 35,
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
            <Link to="invoice" style={{ textDecoration: "none" }}>
              <div className="viewButton">Invoice</div>
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
      <div className="datatableTitle">
       Invoices
        
      </div>
      <DataGrid
        className="datagrid"
        rows={userRows}
        columns={vendorColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
    </div>
    </div>
  );
};

export default InvoiceTable;
