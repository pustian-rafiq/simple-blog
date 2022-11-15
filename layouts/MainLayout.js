import React from "react";
import Posts from "../components/blog/post/Posts";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Meta from "../components/Meta/Meta";


const MainLayout = ({children}) => {
  return (
    <>
     <Meta/>
     <Header />
     { children }
     <Footer />
     

    </>
  );
};

export default MainLayout;