import "./sidebar.css";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaCubes,
  FaShoppingBag,
  FaArrowCircleLeft,
} from "react-icons/fa";

function Sidebar({ isToggle, handelToggle }) {
  return (
    <div className={`sidebar ${isToggle ? "sidebar-toggle" : ""}`}>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <div className="sidebar-container">
            <h3 className="sidebar-title">Dashboard</h3>
            <FaArrowCircleLeft
              className="toggle-icon"
              onClick={() => handelToggle()}
            />
          </div>
          <ul className="sidebar-list">
            <NavLink to="/">
              <li className="sidebar-item">
                <FaHome className="sidebar-icon" />
                <p>Home</p>
              </li>
            </NavLink>
            <NavLink to="/user-list">
              <li className="sidebar-item">
                <FaUsers className="sidebar-icon" />
                <p>Users</p>
              </li>
            </NavLink>
            <NavLink to="/products">
              <li className="sidebar-item">
                <FaCubes className="sidebar-icon" />
                <p>Products</p>
              </li>
            </NavLink>
            <NavLink to="/orders">
              <li className="sidebar-item">
                <FaShoppingBag className="sidebar-icon" />
                <p>Orders</p>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
