import React from "react";
import Layout from "../../component/Layout";
import Home from "../Home/Home/Home";
import Latestdonation from "../Home/Latestdonation/Latestdonation";
import Volunteerstoday from "../Home/Volunteerstoday/Volunteerstoday";
import Fundraisercamp from "../Howitwork/Fundraisercamp";
import Familyfrnds from "../Howitwork/Familyfrnds";
import "../Home/Volunteerstoday/Volunteer";

export default function Howitwork() {
  return (
    <Layout>
      <Home />
      <Fundraisercamp />
      <Familyfrnds />
      <Latestdonation />
      <Volunteer />
      {/* <Volunteerstoday /> */}
    </Layout>
  );
}
