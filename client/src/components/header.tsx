import { Link, Outlet } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <div className="container">
      <h1>Project Management</h1>
      <Link to="/clients">Clients</Link>
      <Link to="/projects">Projects</Link>
      <Outlet />
    </div>
  );
}
