import React from "react";
import Layout from "../../component/Layout";
import Home from "../Home/Home/Home";
// import Formpage from "./Formpage";
// import Footer from "../../component/Footer";
import Formtext from "../Contact/Formtext";

export default function Contact() {
  return (
    <Layout>
      <Home />
      {/* <Formpage /> */}
      <Formtext />
    </Layout>
  );
}
