import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logoutUser } from "../features/userSlice";
import { auth } from "../firebase";

function Sidenav() {
  const user = useSelector((state) => state.data.user.user);
 
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  const navigate = useNavigate();

  const handleBookmarkClick = () => {
    navigate('/Bookmark'); 
  };

  const handleHomeClick = () => {
    navigate('/');
  }

  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />

      <div className="sidenav__buttons">
        <button className="sidenav__button" onClick={handleHomeClick}>
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          <ExploreIcon />
          <span>Explore</span>
        </button>
        <button className="sidenav__button" onClick={handleBookmarkClick}>
          <TurnedInNotIcon />
          <span>Bookmarks</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>
        <div className="sidenav__button">
          <Avatar>
            {user?.username ? user?.username.charAt(0).toUpperCase() : "A"}
          </Avatar>
          <span>
            {user?.username}{" "}
            <button onClick={handelLogout} className="logout__button">
              Logout
            </button>
          </span>
        </div>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon />
          <span className="sidenav__buttonText">More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
