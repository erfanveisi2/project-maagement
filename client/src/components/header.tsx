import { Link, Outlet } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <div className="d-flex justify-content-center">
      <Link className="btn btn-secondary" to="/">
        Clients
      </Link>
      <Link className="btn btn-secondary" to="/projects">
        Projects
      </Link>
      <Outlet />
    </div>
  );
}
