import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {


  const links = [
    {
      path: "/",
      text: "Select User",
    },
    {
      path: "/status",
      text: "Select Status",
    },
    {
      path: "/services",
      text: "Select Service",
    },
    {
      path: "/fundtypes",
      text: "Select Fund Type",
    },
  ];
  return (
    <>
      <div className="navbar">
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <NavLink activeclassname="active" to={link.path}>
                  {link.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      
      
    </>
  );
};

export default Navbar;
