
export const AdminhistoryColumns = [
  { field: "id", headerName: "AdminID", width: 150 },
  {
    field: "user",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.username}</div>;
    },
  },
  // {
  //   field: "email",
  //   headerName: "Email",
  //   width: 230,
  // },

  {
    field: "age",
    headerName: "No of Devices",
    width: 150,
  },
];

//temporary data
export const AdminhistoryRows = [
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
export const VendorhistoryColumns = [
  { field: "id", headerName: "VendorID", width: 150 },
  { field: "Adminid", headerName: "AdminID", width: 150 },
  {
    field: "user",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.username}</div>;
    },
  },
  // {
  //   field: "email",
  //   headerName: "Email",
  //   width: 230,
  // },

  {
    field: "age",
    headerName: "No of Devices",
    width: 150,
  },
];

//temporary data
export const VendorhistoryRows = [
  {
    id: 1,
    Adminid: 1,
    username: "Snow",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    Adminid: 1,
    username: "Jamie Lannister",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 3,
    Adminid: 1,
    username: "Lannister",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    age: 45,
  },
  {
    id: 4,
    Adminid: 1,
    username: "Stark",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    age: 16,
  },
  {
    id: 5,
    Adminid: 1,
    username: "Targaryen",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    age: 22,
  },
  {
    id: 6,
    Adminid: 1,
    username: "Melisandre",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    age: 15,
  },
  {
    id: 7,
    Adminid: 1,
    username: "Clifford",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    age: 44,
  },
  {
    id: 8,
    Adminid: 1,
    username: "Frances",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    age: 36,
  },
  {
    id: 9,
    Adminid: 1,
    username: "Roxie",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    age: 65,
  },
  {
    id: 10,
    Adminid: 1,
    username: "Roxie",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    age: 65,
  },
];
export const userhistoryColumns = [
  { field: "id", headerName: "UserID", width: 150 },
  { field: "Vendorid", headerName: "VendorID", width: 150 },
  {
    field: "user",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.username}</div>;
    },
  },
  // {
  //   field: "email",
  //   headerName: "Email",
  //   width: 230,
  // },

  {
    field: "age",
    headerName: "No of Devices",
    width: 150,
  },
];

//temporary data
export const userhistoryRows = [
  {
    id: 1,
    Vendorid: 1,
    username: "Snow",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    Vendorid: 1,
    username: "Jamie Lannister",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 3,
    Vendorid: 1,
    username: "Lannister",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    age: 45,
  },
  {
    id: 4,
    Vendorid: 1,
    username: "Stark",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    age: 16,
  },
  {
    id: 5,
    Vendorid: 1,
    username: "Targaryen",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    age: 22,
  },
  {
    id: 6,
    Vendorid: 1,
    username: "Melisandre",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    age: 15,
  },
  {
    id: 7,
    Vendorid: 1,
    username: "Clifford",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    age: 44,
  },
  {
    id: 8,
    Vendorid: 1,
    username: "Frances",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    age: 36,
  },
  {
    id: 9,
    Vendorid: 1,
    username: "Roxie",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    age: 65,
  },
  {
    id: 10,
    Vendorid: 1,
    username: "Roxie",
    // img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    age: 65,
  },
];
