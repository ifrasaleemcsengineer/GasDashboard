import React from "react";
import Users from "../admin/pages/list/Users";
import Devices from "../admin/pages/list/Devices";
import MyAccountDetails from "../admin/pages/MyAccount/MyAccountDetails";
import PrivacyPolicy from "../admin/pages/settingsInfo/PrivacyPolicy";
import TermsConditions from "../admin/pages/settingsInfo/Terms&Conditions";
import VendorsHistory from "../admin/pages/History/vendors_history";
import UsersHistory from "../admin/pages/History/users_history";
import MyHistory from "../admin/pages/History/my_history";
import PaymentRequest from "../admin/pages/payment-req/Payment-Request";
import HistroyVendors from "../admin/components/datatable/HistorytableVendors";
import HistroyUsers from "../admin/components/datatable/HistorytableUsers";
import InvoiceTable from "../admin/pages/invoice/invoice_table";
import Home from "../admin/pages/home/Home";
import Vendors from "../admin/pages/list/Vendors";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from "../admin/pages/contact/ContactForm";
import SingleUser from "../admin/pages/single/SingleUser";
import SingleVendor from "../admin/pages/single/SingleVendor";
import NewVendor from "../admin/pages/new/NewVendor";
import NewDevice from "../admin/pages/new/NewDevice";
import UpdateVendor from "../admin/pages/update/UpdateVendor";
import UpdateDevice from "../admin/pages/update/UpdateDevices";
import AssignDevices from "../admin/pages/AssignDevices/assignDevice";
import Login from "../admin/Login/Login";
import Invoice from "../admin/pages/invoice/invoice";

function Adminroutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/admindashboard" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="vendors">
              <Route index element={<Vendors />} />
              <Route path=":vendorId" element={<SingleVendor />} />
              <Route
                path="new"
                element={<NewVendor  title="Add New Vendor" />}
              />
              <Route
                path="update"
                element={<UpdateVendor  title="Update Vendor" />}
              />
           
            <Route path=":adminId" element={<AssignDevices />} />
              <Route
                path="assign"
                element={<AssignDevices />}
              />
              
            </Route>
            <Route path="devices">
              <Route index element={<Devices />} />
              <Route path=":deviceId" element={<SingleVendor />} />
              <Route
                path="new"
                element={<NewDevice  title="Add New Device" />}
              />
              <Route
                path="update"
                element={<UpdateDevice  title="Update Device" />}
              />
            </Route>

            <Route path="users">
              <Route index element={<Users />} />
              <Route path=":userId" element={<SingleUser />} />
            </Route>
            {/* <Route path="vendors_history">
              <Route index element={<VendorsHistory />} />
              <Route path=":vendorId" element={<HistroyVendors />} />
            </Route>
            <Route path="users_history">
              <Route index element={<UsersHistory />} />
              <Route path=":userId" element={<HistroyUsers />} />
            </Route>
            <Route path="vendors-history">
              <Route index element={<VendorsHistory />} />
            </Route>

            <Route path="users-history">
              <Route index element={<UsersHistory />} />
            </Route> */}
            <Route path="contact-us">
              <Route index element={<ContactForm />} />
            </Route>
            {/* <Route path="my-history">
              <Route index element={<MyHistory />} />
            </Route> */}
            <Route path="payment-requests">
              <Route index element={<PaymentRequest />} />
            </Route>
            <Route path="my-account">
              <Route index element={<MyAccountDetails />} />
            </Route>
            <Route path="invoice_table">
              <Route index element={<InvoiceTable />} />
              <Route
                path="invoice"
                element={<Invoice />}
              />
            </Route>
            <Route path="privacy-policy">
              <Route index element={<PrivacyPolicy />} />
            </Route>
            <Route path="terms&conditions">
              <Route index element={<TermsConditions />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Adminroutes;