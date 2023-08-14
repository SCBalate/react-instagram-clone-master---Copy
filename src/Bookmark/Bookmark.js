import React from 'react';
import "./Bookmark.css";
import Sidenav from '../navigation/Sidenav';
// import Timeline from '../timeline/Timeline';
import Suggestions from '../timeline/Suggestions';
import BookmarkedPosts from './Bookmarkpost';
// const BookmarkPage = ({ bookmarkedPosts }) => {
//   return (
//     <div>
//       <h2>Bookmark Page</h2>
//       {bookmarkedPosts.map((post) => (
//         <div key={post.id}>
//           {/* Render bookmarked post */}
//           <p>{post.title}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
const BookmarkPage =({toggleBookmark ,key,post}) =>{
  return (
    <>
    <div className="bookmarkPage">
     <div className="bookmarkpage__navWraper">
        <Sidenav />
      </div>
      <div className="bookmarkpage_content"><BookmarkedPosts toggleBookmark={toggleBookmark} key={key} post={post}/></div>
      <div className="bookmarkpage__suggestion">
        {/* <Timeline /> */}
        <Suggestions/>
      </div>
      </div>
    </>
  )
}
export default BookmarkPage;