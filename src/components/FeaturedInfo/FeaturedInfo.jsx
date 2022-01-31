import React from "react";
import "./featuredInfo.css";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Revanue</span>
        <div className="featured-container">
          <span className="featured-money">$2,250</span>
          <span className="featured-money-rate">
            -11.4
            <MdArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>

      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featured-container">
          <span className="featured-money">$1,250</span>
          <span className="featured-money-rate">
            +5.4
            <MdArrowUpward className="featured-icon" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>

      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featured-container">
          <span className="featured-money">$250</span>
          <span className="featured-money-rate">
            -1.7
            <MdArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
