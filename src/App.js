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
            <Route path="/" element={<Homepage />} />
      {/* <Route path="/" exact component={<Homepage />} /> */}
      <Route path="/Bookmark" element={<BookmarkPage />} />
      </Routes>
    </BrowserRouter></>
      )}
    </div>
  );
}

export default App;
