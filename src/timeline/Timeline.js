// import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
// import { useState } from "react";
import "./Timeline.css";
// import {posts} from "../Backend/db/posts";
function Timeline({posts,toggleBookmark}) {


  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts?.posts?.map((post) => (
            <Post
            key={post?._id}
              user={post?.username}
              postImage={post?.postImage}
              likes={post?.likes}
              timestamp={post?.createdAt}
              toggleBookmark={() =>  toggleBookmark(post)}/>
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
