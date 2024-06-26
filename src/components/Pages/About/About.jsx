import React from "react";
import Layout from "../../component/Layout";
import Home from "../Home/Home/Home";
import Latestdonation from "../Home/Latestdonation/Latestdonation";
import Cardshow from "../Home/Card/Cardshow";
import Ourhistory from "./Ourhistory";
import Photopage from "./Photopage";

export default function About() {
  return (
    <Layout>
      <Home />
      <Ourhistory />
      <Latestdonation />
      <Photopage />
      <Cardshow />
    </Layout>
  );
}
