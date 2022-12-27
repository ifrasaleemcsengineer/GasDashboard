import React from "react";
import Sidebar from "../../components/supersidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Payment-Request.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ImgPopup from "./imgPopup";

function PaymentRequest() {
  const [unApprovedata, setUnApproveData] = useState([]);
  const [approvedata, setapproveData] = useState([]);

  const [showSnapShotTrigger, setshowSnapShotTrigger] = useState(false);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Approve</div>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="lists">
      <Sidebar />
      <div className="listsContainer">
        <Navbar />

        <div className="datatable-approve">
          {/* UnApproved */}
          <div className="datatableTitle">Payment Requests</div>
          <TableContainer
            sx={{ height: 450 }}
            component={Paper}
            className="table"
          >
            <Table sx={{ minWidth: 850 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">Vendor ID</TableCell>
                  <TableCell className="tableCell">Vendor Name</TableCell>
                  <TableCell className="tableCell">Number of devices</TableCell>
                  <TableCell className="tableCell">Creation Date</TableCell>
                  <TableCell className="tableCell">Status</TableCell>
                  <TableCell className="tableCell">SnapShot</TableCell>
                  <TableCell className="tableCell">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {unApprovedata.map((row) => (
                  <TableRow key={row.vendorId}>
                    <TableCell className="tableCell">{row.vendorId}</TableCell>
                    <TableCell className="tableCell">
                      {row.vendorName}
                    </TableCell>
                    <TableCell className="tableCell">{row.Numberofdevices}</TableCell>
                    <TableCell className="tableCell">
                      {row.creationDate}
                    </TableCell>
                    <TableCell className="tableCell">
                      <span className={`status ${row.status}`}>
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell className="cellWrappers">
                      <img
                        src={row.SnapShot}
                        alt=""
                        className="images"
                        onClick={() => setshowSnapShotTrigger(true)}
                      />
                    </TableCell>
                    <ImgPopup
                      trigger={showSnapShotTrigger}
                      setCreateTrigger={setshowSnapShotTrigger}
                    ></ImgPopup>
                    <TableCell className="btn">
                      <button>Approve</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        {/* Approved */}
        <div className="datatable-unapprove">
          <div className="datatableTitle">Approved Payments</div>
          <TableContainer
            sx={{ height: 450 }}
            component={Paper}
            className="table-unApprove"
          >
            <Table sx={{ minWidth: 850 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">Vendor ID</TableCell>
                  <TableCell className="tableCell">Vendor Name</TableCell>
                  <TableCell className="tableCell">Number of devices</TableCell>
                  <TableCell className="tableCell">Creation Date</TableCell>
                  <TableCell className="tableCell">Status</TableCell>
                  {/* <TableCell className="tableCell">SnapShot</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {approvedata.map((row) => (
                  <TableRow key={row.vendorId}>
                    <TableCell className="tableCell">{row.vendorId}</TableCell>
                    <TableCell className="tableCell">
                      {row.vendorName}
                    </TableCell>
                    <TableCell className="tableCell">{row.Numberofdevices}</TableCell>
                    <TableCell className="tableCell">
                      {row.creationDate}
                    </TableCell>
                    <TableCell className="tableCell">
                      <span className={`status ${row.status}`}>
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell className="cellWrappers">
                      {/* <img
                        src={row.SnapShot}
                        alt=""
                        className="images"
                        onClick={() => setshowSnapShotTrigger(true)}
                      /> */}
                    </TableCell>
                    <ImgPopup
                      trigger={showSnapShotTrigger}
                      setCreateTrigger={setshowSnapShotTrigger}
                    ></ImgPopup>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default PaymentRequest;
