import React from "react";
import "./Homepage.css";
import Sidenav from "./navigation/Sidenav";
import Timeline from "./timeline/Timeline";

function Homepage({post , toggleBookmark}) {
  return (
    <div className="homepage">
      <div className="homepage__navWraper">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline posts={post} toggleBookmark={toggleBookmark}/>
      </div>
    </div>
  );
}

export default Homepage;
