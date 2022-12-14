import React from "react";
import Users from "../admin/pages/list/Users";
import MyAccount from "../admin/pages/MyAccount/Myaccount";
import PrivacyPolicy from "../admin/pages/settingsInfo/PrivacyPolicy";
import TermsConditions from "../admin/pages/settingsInfo/Terms&Conditions";
import VendorsHistory from "../admin/pages/History/vendors_history";
import UsersHistory from "../admin/pages/History/users_history";
import MyHistory from "../admin/pages/History/my_history";
import PaymentRequest from "../admin/pages/payment-req/Payment-Request";
import HistroyVendors from "../admin/components/datatable/HistorytableVendors";
import HistroyUsers from "../admin/components/datatable/HistorytableUsers";
import Invoice from "../admin/pages/invoice/invoice";
import Home from "../admin/pages/home/Home";
import Vendors from "../admin/pages/list/Vendors";
import New from "../admin/pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { vendorsInputs, vendorsUpdate } from "../admin/formSource";
import ContactForm from "../admin/pages/contact/ContactForm";
import SingleUser from "../admin/pages/single/SingleUser";
import SingleVendor from "../admin/pages/single/SingleVendor";

function Adminroutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/admindashboard" element={<Home />} />
            {/* <Route path="/Login" element={<Login />} /> */}
            <Route path="vendors">
              <Route index element={<Vendors />} />
              <Route path=":vendorId" element={<SingleVendor />} />
              <Route
                path="new"
                element={<New inputs={vendorsInputs} title="Add New Vendors" />}
              />
              <Route
                path="update"
                element={<New inputs={vendorsUpdate} title="Update Vendors" />}
              />
            </Route>

            <Route path="users">
              <Route index element={<Users />} />
              <Route path=":userId" element={<SingleUser />} />
            </Route>
            <Route path="vendors_history">
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
            </Route>
            <Route path="contact-us">
              <Route index element={<ContactForm />} />
            </Route>
            <Route path="my-history">
              <Route index element={<MyHistory />} />
            </Route>
            <Route path="payment-requests">
              <Route index element={<PaymentRequest />} />
            </Route>
            <Route path="my-account">
              <Route index element={<MyAccount />} />
            </Route>
            <Route path="invoice">
              <Route index element={<Invoice />} />
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