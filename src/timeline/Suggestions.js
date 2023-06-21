import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";
import { users } from "../Backend/db/users";
import {useState} from "react";

function Suggestions() {
  const[follow,setFollow] = useState();

  const onclickFollow =()=>{
    setFollow  (!follow);
  }

  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">
      {users.map((x)=>(
        <div className="suggestions__username"  key={x._id}>
          <div className="username__left">
           
             
                <div className="username__left">
            <span className="avatar">
              <Avatar>{x.profilePicture}</Avatar>
            </span>
            <div className="username__info">
              <span className="username">{x?.username}</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
              
          
           
          </div>
          <button className="follow__button" onClick={onclickFollow}>{(x?.isFollow  ? "follow" : "unfollow")}</button>
        </div>
  ))
       
}
        {/* <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">redian_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">redian_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">redian_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>*/}
      </div>
    </div> 
  );
}

export default Suggestions;
