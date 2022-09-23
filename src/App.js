import React from 'react';
import { useState } from "react";
//import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Contact from "./pages/Contact";
import Voorspel from "./pages/Voorspel";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
//import { makeStyles } from "@mui/material/styles";
import SideBar from "./Sidebar";
// import Header from"./Header";

export default function App() {
  const [sidebarOpen, setSideBarOpen] = useState(true);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  return (
    <div>

    <Router>
      <span>
        <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      </span>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/" element={<Layout />} />
          <Route path="Teams" element={<Teams />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Voorspel" element={<Voorspel />} />
        </Route>
      </Routes>
    </Router>
    </div>
  );
}
