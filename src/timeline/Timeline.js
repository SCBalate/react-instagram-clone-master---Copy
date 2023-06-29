// import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import { useState } from "react";
import "./Timeline.css";
import {posts} from "../Backend/db/posts";
function Timeline({post,toggleBookmark}) {
  // const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  // const [posts, setPosts] = useState([ ]);
  // const handleBookmark = (posts) => {
  //   debugger
    
  //   const isBookmarked = bookmarkedPosts.some(p => p?._id === posts?._id);
  //   if (isBookmarked) {
  //     const updatedBookmarks = bookmarkedPosts.filter(p => p?._id !== posts?._id);
  //     setBookmarkedPosts(updatedBookmarks);
  //   } else {
  //     setBookmarkedPosts(prevBookmarkedPosts => [...prevBookmarkedPosts, posts]);
  //   }
  // };

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
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
