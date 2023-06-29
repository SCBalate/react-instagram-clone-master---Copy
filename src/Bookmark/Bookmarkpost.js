import Suggestions from "../timeline/Suggestions";
import {posts} from "../Backend/db/posts";
import React, { useState, useEffect } from 'react';
import Post from "../timeline/Post/Post";
// const bookmarkedPosts=()=>{
//     return(
//         <div>
//             <div className="Bookmark_posts"></div>
//             <div className="bookmarkpost__suggestion">
//         <Suggestions/>
//       </div>
//         </div>
//     )
// }

// export default bookmarkedPosts
// function BookmarkedPosts() {
//     const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  
//     useEffect(() => {
//       fetchBookmarkedPosts();
//     }, []);
  
//     function fetchBookmarkedPosts() {
     
//       fetch('../Backend/db/posts')
//         .then(response => response.json())
//         .then(data => setBookmarkedPosts(data));
//     }
  
//     return (
//       <div>
//         <h2>Bookmarked Posts</h2>
//         {bookmarkedPosts.map(posts => (
//           <Post key={posts._id} post={posts} toggleBookmark={toggleBookmark} />
//         ))}
//       </div>
//     );
//   }

function BookmarkedPosts() {
    const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  
    useEffect(() => {
      fetchBookmarkedPosts();
    }, []);
  
    function fetchBookmarkedPosts() {
      // Make an API request to fetch all posts
      fetch('/api/posts')
        .then(response => response.json())
        .then(posts => {
         console.log(posts)
          const bookmarked = posts.posts.filter((x)=>x.isArchived);
          console.log(bookmarked);
          setBookmarkedPosts(bookmarked);
        });
    }
  
    return (
      <div>
        <h2>Bookmarked Posts</h2>
        {bookmarkedPosts.map(post => (
          <Post key={post?.id} post={post} toggleBookmark={() => {}} />
        ))}
      </div>
    );
  }
  export default BookmarkedPosts