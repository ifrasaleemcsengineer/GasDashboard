import React from "react";
import Home from "../SuperAdmin/pages/home/Home";
import Login from "../Login/Login";
import Admins from "../SuperAdmin/pages/list/Admin";
import New from "../SuperAdmin/pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../style/dark.scss";
import Users from "../SuperAdmin/pages/list/Users";
import Devices from "../SuperAdmin/pages/list/Devices";
import Vendor from "../SuperAdmin/pages/list/vendors";
import AdminsHistory from "../SuperAdmin/pages/History/admins_history";
import VendorsHistory from "../SuperAdmin/pages/History/vendors_history";
import UsersHistory from "../SuperAdmin/pages/History/users_history";
import AdminHistory from "../SuperAdmin/pages/single/AdminHistory";
import VendorHistory from "../SuperAdmin/pages/single/VendorHistory";
import UserHistory from "../SuperAdmin/pages/single/UserHistory";
import MyAccountDetails from "../SuperAdmin/pages/MyAccount/MyAccountDetails";
import PaymentRequest from "../SuperAdmin/pages/payment-req/Payment-Request";
import PrivacyPolicy from "../SuperAdmin/pages/settingsInfo/PrivacyPolicy"
import TermsConditions from "../SuperAdmin/pages/settingsInfo/Terms&Conditions"
import ContactForm from "../SuperAdmin/pages/contact/ContactForm";
import SingleVendor from "../SuperAdmin/pages/single/SingleVendor";
import SingleUser from "../SuperAdmin/pages/single/SingleUser";
import SingleAdmin from "../SuperAdmin/pages/single/SingleAdmin";
import UpdateAdmin from "../SuperAdmin/pages/update/UpdateAdmin";
import UpdateDevice from "../SuperAdmin/pages/update/UpdateDevices";
import NewDevice from "../SuperAdmin/pages/new/newDevice"
function Superadminroutes() {
//   const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="admin">
              <Route index element={<Admins />} />
              {/* <Route path=":adminId" element={<Single />} /> */}
              <Route
                path="new"
                element={<New title="Add New Admins" />}
              />
            </Route>
            <Route path="admin">
              <Route index element={<Admins />} />
              <Route path=":adminId" element={<SingleAdmin />} />
              <Route
                path="update"
                element={<UpdateAdmin title="Update Admin" />}
              />
              
            </Route>
            <Route path="devices">
              <Route index element={<Devices />} />
              {/* <Route path=":adminId" element={<Single />} /> */}
              <Route
                path="new"
                element={<NewDevice title="Add New Device" />}
              />
            </Route>
            <Route path="devices">
              <Route index element={<Admins />} />
              <Route path=":adminId" element={<SingleAdmin />} />
              <Route
                path="update"
                element={<UpdateDevice title="Update Device" />}
              />
              
            </Route>
           
              <Route path="vendors">
              <Route index element={<Vendor />} />
              <Route path=":vendorId" element={<SingleVendor />} />
              <Route
                path="new"
                element={<New title="Add New Vendor" />}
              />
            </Route>
            <Route path="Payment-Request">
              <Route index element={<PaymentRequest />} />

            </Route>
            <Route path="ContactForm">
              <Route index element={<ContactForm />} />

            </Route>
            <Route path="PrivacyPolicy">
              <Route index element={<PrivacyPolicy />} />

            </Route>
            <Route path="Terms&Conditions">
              <Route index element={<TermsConditions />} />

            </Route>
            <Route path="users">
              <Route index element={<Users />} />
              <Route path=":userId" element={<SingleUser />} />
              <Route
                path="new"
                element={<New title="Add New Users" />}
              />
            </Route>
           
            <Route path="admins_history">
              <Route index element={<AdminsHistory />} />
               <Route path=":userId" element={<AdminHistory />} /> 
              
            </Route>
            <Route path="vendors_history">
              <Route index element={<VendorsHistory />} />
              <Route path=":userId" element={<VendorHistory />} /> 
              
            </Route>
            <Route path="users_history">
              <Route index element={<UsersHistory />} />
              <Route path=":userId" element={<UserHistory />} /> 
              
            </Route>
            {/* <Route path="invoice">
              <Route index element={<Invoice />} /> */}
               {/* <Route path=":userId" element={<SingleHistory />} />  */}
              
            {/* </Route> */}
            <Route path="Myaccount">
              <Route index element={<MyAccountDetails />} />
               {/* <Route path=":userId" element={<SingleHistory />} />  */}
              
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Superadminroutes;
