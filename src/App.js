import "./App.css";
import Homepage from "./Homepage";
import BookmarkPage from "./Bookmark/Bookmark";
import Authenticate from "./authenticate/Authenticate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";
import { BrowserRouter, Route,Routes, Navigate } from 'react-router-dom';



function App() {
  const dispatch = useDispatch();

const[post,setPosts]= useState([]);

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
   
    fetch(` api/users/bookmark/:postId/`, { method: 'POST' })
      .then(response => response.json())
      .then(updatedPost => {
        setPosts(prevPosts =>
          prevPosts.map(post =>
            post.id === updatedPost.id ? updatedPost : post
          )
        );
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
            <Route path="/" element={<Homepage key={post.id} post={post} toggleBookmark={toggleBookmark}/>} />
      {/* <Route path="/" exact component={<Homepage />} /> */}
      <Route path="/Bookmark" element={<BookmarkPage />} />
      </Routes>
    </BrowserRouter></>
      )}
    </div>
  );
}

export default App;
