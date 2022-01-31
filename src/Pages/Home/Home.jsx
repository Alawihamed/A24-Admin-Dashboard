import React from "react";
import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import { ChartData } from "../../DummyData";
import "./home.css";

function Home() {
  return (
    <div>
      <FeaturedInfo />
      <Chart
        title="Sales Analytics"
        data={ChartData}
        grid
        dataKey="Active User"
      />
      <div className="home-widget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
