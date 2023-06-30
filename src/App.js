import "./App.css";
import Homepage from "./Homepage";
import BookmarkPage from "./Bookmark/Bookmark";
import Authenticate from "./authenticate/Authenticate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";
import { BrowserRouter, Route,Routes, Navigate } from 'react-router-dom';
import { posts } from "./Backend/db/posts";



function App() {
  const dispatch = useDispatch();

const[bookmarkPost,setBookmarkedPosts]= useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, []);

  function toggleBookmark(postId) {
    // Make an API request to toggle the bookmark status
    fetch(`api/users/bookmark/:postId/`, { method: 'POST' })
      .then(response => {
        if (!response.ok) {
          throw new Error('Request failed with status ' + response.status);
        }
        return response.json();
      })
      .then(updatedPost => {
        // Update the value of `isArchived` to true
        updatedPost.isArchived = true;
  
        setBookmarkedPosts(prevPosts => {
          // Check if the post already exists in the bookmarked posts list
          const postIndex = prevPosts.findIndex(post => post._id === updatedPost._id);
          if (postIndex !== -1) {
            // Post already exists, update it in the list
            const updatedPosts = [...prevPosts];
            updatedPosts[postIndex] = updatedPost;
            return updatedPosts;
          } else {
            // Post doesn't exist, add it to the list
            return [...prevPosts, updatedPost];
          }
        });
      })
      .catch(error => {
        console.error('Error toggling bookmark:', error);
        // Handle the error and provide user feedback
        // For example, you can show a toast notification or display an error message on the UI
      });
  }
  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);
  return (
    <div className="app">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
         <BrowserRouter>
         <Routes>
        {user ? <Route path="/" exact component={<Authenticate />} /> : <Route path="*" exact component={<Homepage />} />}
        
        <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Homepage key={posts.id} post={posts} toggleBookmark={toggleBookmark}/>} />
      {/* <Route path="/" exact component={<Homepage />} /> */}
      <Route path="/Bookmark" element={<BookmarkPage toggleBookmark={toggleBookmark}/>} />
      </Routes>
    </BrowserRouter></>
      )}
    </div>
  );
}

export default App;
