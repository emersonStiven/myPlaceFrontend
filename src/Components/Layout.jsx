import react from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./HeaderSection/Header";
import { Footer } from "../Components/Footer";

export const Layout = () => {
  return (
    <div className="app_wrapper">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
