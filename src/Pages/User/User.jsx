import React from "react";
import "./user.css";
import { FaUser } from "react-icons/fa";
import {
  MdDateRange,
  MdPhoneIphone,
  MdEmail,
  MdLocationPin,
  MdUpload,
} from "react-icons/md";

function User() {
  return (
    <div className="user">
      <h1 className="user-title">Edit User</h1>
      <div className="user-container">
        <div className="user-info">
          <div className="user-info-top">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
              alt="user-avatar"
              className="user-avatar"
            />
            <div className="user-info-top-container">
              <span className="user-info-top-name">Alawi Alaidaros</span>
              <span className="user-info-top-title">Web Developer</span>
            </div>
          </div>
          <div className="user-info-bottom">
            <span className="user-info-bottom-title">User Details</span>
            <div className="user-info-bottom-container">
              <FaUser className="user-info-bottom-icon" />
              <span className="user-info-bottom-details">Alawi</span>
            </div>
            <div className="user-info-bottom-container">
              <MdDateRange className="user-info-bottom-icon" />
              <span className="user-info-bottom-details">11/11/1996</span>
            </div>
            <span className="user-info-bottom-title">Contact Details</span>
            <div className="user-info-bottom-container">
              <MdPhoneIphone className="user-info-bottom-icon" />
              <span className="user-info-bottom-details">+967 123 456 789</span>
            </div>
            <div className="user-info-bottom-container">
              <MdEmail className="user-info-bottom-icon" />
              <span className="user-info-bottom-details">alawi@gmail.com</span>
            </div>
            <div className="user-info-bottom-container">
              <MdLocationPin className="user-info-bottom-icon" />
              <span className="user-info-bottom-details">Yemen,Hadramout</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-update-title">Edit</span>
          <form className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label>Username</label>
                <input
                  type="text"
                  className="user-update-input"
                  placeholder="Alawi"
                />
              </div>
              <div className="user-update-item">
                <label>Full Name</label>
                <input
                  type="text"
                  className="user-update-input"
                  placeholder="Alawi Alaidaros"
                />
              </div>
              <div className="user-update-item">
                <label>Email</label>
                <input
                  type="email"
                  className="user-update-input"
                  placeholder="alawi@gmail.com"
                />
              </div>
              <div className="user-update-item">
                <label>Phone</label>
                <input
                  type="text"
                  className="user-update-input"
                  placeholder="+967 123 456 789"
                />
              </div>
              <div className="user-update-item">
                <label>Address</label>
                <input
                  type="text"
                  className="user-update-input"
                  placeholder="Yemen,Hadramout"
                />
              </div>
            </div>
            <div className="user-update-right">
              <div className="user-update-upload">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                  className="user-update-upload-avatar"
                  alt="update-avatar"
                />
                <label htmlFor="file">
                  <MdUpload className="user-update-icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="user-update-button" type="button">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
