
export const VendorHistoryColumns = [
  { field: "id", headerName: "VendorID", width: 190 },
  {
    field: "user",
    headerName: "Name",
    width: 280,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.username}</div>;
    },
  },
  

  {
    field: "age",
    headerName: "No of Devices",
    width: 250,
  },
];
export const VendorHistoryRows = [
  {
    id: 1,
    username: "Snow",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    age: 65,
  },
];
export const userHistoryColumn = [
  { field: "id", headerName: "UserID", width: 190 },
  { field: "vendorid", headerName: "VendorID", width: 190 },
  {
    field: "user",
    headerName: "Name",
    width: 250,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.username}</div>;
    },
  },
 
  {
    field: "age",
    headerName: "No of Devices",
    width: 150,
  },
];
export const userHistoryRows = [
  {
    id: 1,
    vendorid: 1,
    username: "Snow",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    vendorid: 1,
    username: "Jamie Lannister",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 3,
    vendorid: 1,
    username: "Lannister",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    age: 45,
  },
  {
    id: 4,
    vendorid: 2,
    username: "Stark",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    age: 16,
  },
  {
    id: 5,
    vendorid: 2,
    username: "Targaryen",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    age: 22,
  },
  {
    id: 6,
    vendorid: 2,
    username: "Melisandre",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    age: 15,
  },
  {
    id: 7,
    vendorid: 7,
    username: "Clifford",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    age: 44,
  },
  {
    id: 8,
    vendorid: 3,
    username: "Frances",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    age: 36,
  },
  {
    id: 9,
    vendorid: 8,
    username: "Roxie",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    age: 65,
  },
  {
    id: 10,
    vendorid: 2,
    username: "Roxie",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    age: 65,
  },
];
