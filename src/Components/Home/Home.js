import React from "react";
import Sidebar from "../SideBar/Sidebar";
import "./Home.css";

const Home = () => {
  return (
    <main className="main__container">
      <div className="sidebar_container">
        <Sidebar />
      </div>
      <div className="home__container">Hi i am home</div>
    </main>
  );
};

export default Home;
