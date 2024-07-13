import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };

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
              return <li>
                <NavLink activeclassname="active" to={link.path}>
                  {link.text}
                </NavLink>
              </li>;
            })}
        </ul>
      </div>
      <div className="detail">
        <div className="left">
          <input type="text" placeholder="Search.." />
        </div>
        <div className="right">
          <button className="view">View</button>
          <button className="export">
            <i className="fa-solid fa-file-excel"></i>
          </button>
          <button className="csv">
            <i className="fa-solid fa-file-csv"></i>
          </button>
          <button className="filter">
            <i className="fa-solid fa-filter"></i>
          </button>
        </div>
      </div>
      <div className="radio-container">
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="all"
              checked={selectedValue === "all"}
              onChange={handleRadioChange}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              value="success"
              checked={selectedValue === "success"}
              onChange={handleRadioChange}
            />
            Success
          </label>
          <label>
            <input
              type="radio"
              value="failed"
              checked={selectedValue === "failed"}
              onChange={handleRadioChange}
            />
            Failed
          </label>
          <label>
            <input
              type="radio"
              value="pending"
              checked={selectedValue === "pending"}
              onChange={handleRadioChange}
            />
            Pending
          </label>
          <label>
            <input
              type="radio"
              value="reversed"
              checked={selectedValue === "reversed"}
              onChange={handleRadioChange}
            />
            Reaversed
          </label>
        </div>
      </div>
    </>
  );
};

export default Navbar;
