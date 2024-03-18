import React, { createElement, useState } from "react";
import "./Navbar.css";
import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import { Calculates } from './Calculator';
import Quote from '../Quotes/Quote';
import Home from '../Home/Home';
import { IoClose, IoMenu } from "react-icons/io5";

function Navbar() {
  const [active, setActive] = useState(false); // Use boolean for active state
  const [icon, setIcon] = useState(false); // Use boolean for icon state
  const navToggle = () => {
    setActive(!active);
    setIcon(!icon);
  };
  const hideNav = () => {
    setActive(false);
    setIcon(false);
  };

  return (
    <nav className={active ? "nav nav--expanded" : "nav"} >
       <NavLink to="/"className="nav__brand">
      <p className="logo">Math Magicians</p>
      </NavLink>
      <ul className={active ? "nav__active" : "nav__menu"}>
        <li className="nav__item">
          <NavLink to="/" className="navlink-class"  onClick={hideNav}>Home</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="calculator" className="navlink-class"  onClick={hideNav}>Calculator</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="quote" className="navlink-class" onClick={hideNav}>Quotes</NavLink>
        </li>
      </ul>
      <div onClick={navToggle} className="nav__toggler.active ">
        <div className="menugroup">
        <div className={icon ? "nav__close" : "menu"} id="nav-close">
          {icon ? <IoClose size={32} color="white" /> : <IoMenu size={32} color="white" />}
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
