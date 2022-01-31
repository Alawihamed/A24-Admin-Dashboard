import React from "react";
import "./widgetLg.css";

function WidgetLg() {
  const Button = ({ type }) => (
    <button className={`widget-large-button ${type}`}>{type}</button>
  );

  return (
    <div className="widget-large">
      <h3 className="widget-large-title">Latest Transactions</h3>
      <div className="responsive-table">
        <table className="widget-large-table">
          <thead>
            <tr className="widget-large-tr">
              <th className="widget-large-th">Customer</th>
              <th className="widget-large-th">Date</th>
              <th className="widget-large-th">Amount</th>
              <th className="widget-large-th">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="widget-large-tr">
              <td className="widget-large-user">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                  alt="user-img"
                  className="widget-large-user-img"
                />
                <span className="widget-large-user-name">Alawi</span>
              </td>
              <td className="widget-large-date">2 Jun 2022</td>
              <td className="widget-large-amount">$720.00</td>
              <td className="widget-large-status">
                <Button type="Approved" />
              </td>
            </tr>
            <tr className="widget-large-tr">
              <td className="widget-large-user">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                  alt="user-img"
                  className="widget-large-user-img"
                />
                <span className="widget-large-user-name">Saeed</span>
              </td>
              <td className="widget-large-date">5 Jun 2022</td>
              <td className="widget-large-amount">$612.00</td>
              <td className="widget-large-status">
                <Button type="Pending" />
              </td>
            </tr>
            <tr className="widget-large-tr">
              <td className="widget-large-user">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                  alt="user-img"
                  className="widget-large-user-img"
                />
                <span className="widget-large-user-name">Abdullah</span>
              </td>
              <td className="widget-large-date">7 Jun 2022</td>
              <td className="widget-large-amount">$685.00</td>
              <td className="widget-large-status">
                <Button type="Declined" />
              </td>
            </tr>
            <tr className="widget-large-tr">
              <td className="widget-large-user">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                  alt="user-img"
                  className="widget-large-user-img"
                />
                <span className="widget-large-user-name">Omar</span>
              </td>
              <td className="widget-large-date">10 Jun 2022</td>
              <td className="widget-large-amount">$370.00</td>
              <td className="widget-large-status">
                <Button type="Pending" />
              </td>
            </tr>
            <tr className="widget-large-tr">
              <td className="widget-large-user">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                  alt="user-img"
                  className="widget-large-user-img"
                />
                <span className="widget-large-user-name">Ahmed</span>
              </td>
              <td className="widget-large-date">13 Jun 2022</td>
              <td className="widget-large-amount">$150.00</td>
              <td className="widget-large-status">
                <Button type="Approved" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WidgetLg;
