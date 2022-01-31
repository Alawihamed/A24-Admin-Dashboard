import React from "react";
import "./widgetSm.css";
import { MdVisibility } from "react-icons/md";

function WidgetSm() {
  return (
    <div className="widget-small">
      <span className="widget-small-title">New Join Members</span>
      <ul className="widget-small-list">
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
            alt="new-member"
            className="widget-small-img"
          />
          <div className="widget-small-user">
            <span className="widget-small-user-name">Alawi</span>
            <span className="widget-small-user-title">Web Developer</span>
          </div>
          <button className="widget-small-button">
            <MdVisibility className="widget-small-icon" />
            Display
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
            alt="new-member"
            className="widget-small-img"
          />
          <div className="widget-small-user">
            <span className="widget-small-user-name">Ahmed</span>
            <span className="widget-small-user-title">Mobile Developer</span>
          </div>
          <button className="widget-small-button">
            <MdVisibility className="widget-small-icon" />
            Display
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg"
            alt="new-member"
            className="widget-small-img"
          />
          <div className="widget-small-user">
            <span className="widget-small-user-name">Mohammed</span>
            <span className="widget-small-user-title">Data Analyst</span>
          </div>
          <button className="widget-small-button">
            <MdVisibility className="widget-small-icon" />
            Display
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?cs=srgb&dl=pexels-nitin-khajotia-1516680.jpg&fm=jpg"
            alt="new-member"
            className="widget-small-img"
          />
          <div className="widget-small-user">
            <span className="widget-small-user-name">Abdullah</span>
            <span className="widget-small-user-title">Cyber Security</span>
          </div>
          <button className="widget-small-button">
            <MdVisibility className="widget-small-icon" />
            Display
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?cs=srgb&dl=pexels-pixabay-532220.jpg&fm=jpg"
            alt="new-member"
            className="widget-small-img"
          />
          <div className="widget-small-user">
            <span className="widget-small-user-name">Omar</span>
            <span className="widget-small-user-title">Web Developer</span>
          </div>
          <button className="widget-small-button">
            <MdVisibility className="widget-small-icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
