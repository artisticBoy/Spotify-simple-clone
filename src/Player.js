import React from "react";
import "./Player.css";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "./Footer";
import "./Footer.css";

const Player = ({ spotify }) => {
  return (
    <>
      <div className="player">
        <div className="player-body">
          <SideBar />
          <Body spotify={spotify} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Player;
