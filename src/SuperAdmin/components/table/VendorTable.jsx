import "../datatable/datatable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const VendorTable = () => {
  const rows = [
    {
      deviceId: 2342355,
      name: "ASUS ROG Strix",
      noOfDevices: "66",
      weight: "5",
      amount: 2000,
      date: "2/4/22",
      status: "Pending",
    },
    {
      deviceId: 2342355,
      name: "ASUS ROG Strix",
      noOfDevices: "66",
      weight: "5",
      amount: 2000,
      date: "2/4/22",
      status: "Pending",
    },
    {
      deviceId: 2342355,
      name: "ASUS ROG Strix",
      noOfDevices: "66",
      weight: "5",
      amount: 2000,
      date: "2/4/22",
      status: "Pending",
    },
    {
      deviceId: 2342355,
      name: "ASUS ROG Strix",
      noOfDevices: "66",
      weight: "5",
      amount: 2000,
      date: "2/4/22",
      status: "Pending",
    },
    {
      deviceId: 2342355,
      name: "ASUS ROG Strix",
      noOfDevices: "66",
      weight: "5",
      amount: 2000,
      date: "2/4/22",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Device ID</TableCell>
            <TableCell className="tableCell">Device Name</TableCell>
            <TableCell className="tableCell">No of Devices</TableCell>
            <TableCell className="tableCell">Weight</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.deviceId}>
              <TableCell className="tableCell">{row.deviceId}</TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.noOfDevices}</TableCell>
              <TableCell className="tableCell">{row.weight} KG</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VendorTable;