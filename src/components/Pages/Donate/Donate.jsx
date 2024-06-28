import React from "react";
import Layout from "../../component/Layout";
import Home from "../../Pages/Home/Home/Home";
import Latestdonation from "../Home/Latestdonation/Latestdonation";
import Vonteerstoday from "../Home/Volunteerstoday/Volunteerstoday";
import Volunteer from "../Home/Volunteerstoday/Volunteer";

export default function Donate() {
  return (
    <Layout>
      <Home />
      <Latestdonation />
      <Latestdonation />
      <Volunteer />
      {/* <Vonteerstoday /> */}
    </Layout>
  );
}
