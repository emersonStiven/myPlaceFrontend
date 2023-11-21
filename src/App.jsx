import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../src/pages//home/Home";
import { Layout } from "./components/home/Layout";
import {Error404} from "./components/generalUse/Error404"
import { Hosting } from "./pages/host/Hosting";
import { AccountSettings } from "./pages/account/AccountSettings";
import { SettingsLayout } from "./pages/account/SettingsLayout";
import {AccountInfo} from "./pages/account/AccountInfo";
import { Verification } from "./pages/account/Verification";
import {Bookings} from "./pages/account/Bookings";
import {UserInfo} from "./pages/account/UserInfo";
import {Preferences} from "./pages/account/Preferences";
import {Payments} from "./pages/account/Payments";
import {SessionSecurity} from "./pages/account/SessionSecurity";
import {Notifications} from "./pages/account/Notifications";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<Error404/>}></Route>
        </Route>

        <Route path="/account" element={<SettingsLayout />}>
          <Route index element={<AccountSettings />}></Route>
          <Route path="account-info" element={<AccountInfo/>}></Route>
          <Route path="account-info/verification" element={<Verification/>}></Route>

          <Route path="bookings" element={<Bookings/>}></Route>
          <Route path="payments" element={<Payments/>}></Route>
          <Route path="security" element={<SessionSecurity/>}></Route>
          <Route path="user-info" element={<UserInfo/>}></Route>
          <Route path="preferences" element={<Preferences/>}></Route>
          <Route path="notifications" element={<Notifications/>}></Route>
        </Route>

        <Route path="/hosting" element={<Hosting/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

