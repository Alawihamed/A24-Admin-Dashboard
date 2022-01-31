import React from "react";
import "./newUser.css";

function NewUser() {
  return (
    <div className="new-user">
      <h1 className="new-user-title">New User</h1>
      <form className="new-user-form">
        <div className="new-user-item">
          <label>Username</label>
          <input
            type="text"
            className="new-user-input"
            placeholder="Username"
          />
        </div>
        <div className="new-user-item">
          <label>Full Name</label>
          <input
            type="text"
            className="new-user-input"
            placeholder="Full Name"
          />
        </div>
        <div className="new-user-item">
          <label>Email</label>
          <input type="text" className="new-user-input" placeholder="Email" />
        </div>
        <div className="new-user-item">
          <label>Password</label>
          <input
            type="text"
            className="new-user-input"
            placeholder="Password"
          />
        </div>
        <div className="new-user-item">
          <label>Phone</label>
          <input type="text" className="new-user-input" placeholder="Phone" />
        </div>
        <div className="new-user-item">
          <label>Address</label>
          <input type="text" className="new-user-input" placeholder="Address" />
        </div>
        <div className="new-user-item">
          <label>Gender</label>
          <div className="new-user-gender">
            <input type="radio" id="male" name="gender" />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" />
            <label htmlFor="female">Female</label>
            <input type="radio" id="other" name="gender" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="new-user-item">
          <label>Active</label>
          <select className="new-user-select" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="button" className="new-user-btn-save">
          Save
        </button>
      </form>
    </div>
  );
}

export default NewUser;
