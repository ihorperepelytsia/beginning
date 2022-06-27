import React from "react";
import { Header, Link } from "./Nav.styled";
import { Outlet } from "react-router-dom";
const Nav = () => (
  <>
    <Header>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </Header>
    <Outlet />
  </>
);

export default Nav;
