import React, { useState } from "react";
import "./topbar.css";
import { NavLink } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import Avatar from "../../assets/avatar.png";

function Topbar() {
  const [adminInfo, setAdminInfo] = useState(false);
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="top-left">
          <NavLink to="/">
            <span className="logo">A24 Dashboard</span>
          </NavLink>
        </div>
        <div className="top-right">
          <div className="topbar-container">
            <MdLanguage />
            <select id="lang" className="topbar-select-lang">
              <option value="En">English</option>
              <option value="Ar">Arabic</option>
            </select>
          </div>
          <div className="topbar-avatar">
            <img
              src={Avatar}
              alt="avtar"
              onClick={() => setAdminInfo(!adminInfo)}
            />
            <ul className={`admin-info ${adminInfo ? "display" : ""}`}>
              <li>Logout</li>
              <li>
                <BsBell />
                Notification
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
