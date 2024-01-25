import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Homepage from "./components/pages/Homepage";
import Users from "./components/userspage/RecentUsers";
import Dashboard from "./components/dashboard/maindashboard/Dashboard";
import Analytics from "./components/pages/Analytics";
import Approvals from "./components/pages/Approvals";
import Profile from "./components/pages/Profile";
import Logout from "./components/pages/Logout";
import Notifications from "./components/pages/Notifications";
import ServicesPage from "./components/dashboard/services/servicesmain/ServicesPage";
import Home from "./components/dashboard/Advertisements/banners/Homebanners/OfferBanners/homeOffer";
// import UserProfile from "./components/UserProfile";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/" element={<Users />} />
          {/* <Route path="/users/:userId" element={<UserProfile />} /> */}
          <Route path="admin/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="admin/dashboard/services" element={<ServicesPage />} />
          <Route path="/admin/dashboard/advertisements" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
