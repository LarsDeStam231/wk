import React from "react";
import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Teams from "./pages/Teams";
// import Contact from "./pages/Contact";
// import Voorspel from "./pages/Voorspel";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Outlet, Link } from "react-router-dom";


const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>
      <Layout />
      <button onClick={props.toggleSidebar} className="sidebar-toggle">
        Menu
      </button>
    </div>

  );
};

export default SideBar;
