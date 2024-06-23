import React from "react";
import Home from "./Home";
import Collectionpage from "./Collectionpage";
import Layout from "../../../component/Layout";

export default function Homecollection() {
  return (
    <>
      <Layout>
        <Home />
        <Collectionpage />
      </Layout>
    </>
  );
}
