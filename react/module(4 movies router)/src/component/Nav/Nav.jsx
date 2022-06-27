import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
const Nav = () => (
  <header className={style.navigation}>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? style.activeLink : style.link)}
    >
      Home
    </NavLink>
    <NavLink
      to="/movies"
      className={({ isActive }) => (isActive ? style.activeLink : style.link)}
    >
      Movies
    </NavLink>
  </header>
);

export default Nav;
