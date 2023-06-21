// import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";
import {posts} from "../Backend/db/posts";
function Timeline() {
  // const [posts, setPosts] = useState([ ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
            key={post._id}
              user={post.username}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.createdAt}
            />
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
