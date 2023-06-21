import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React, { useState ,useEffect} from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ user, postImage, likes, timestamp }) {

 
    const [count, setCount] = useState(7);
    const [increase, setIncrease] = useState(true);
    const [bookMark , setBookmark] = useState(true);

    const handleLikeToggle = () => {
      if (increase) {
        setCount((prevCount) => prevCount + 1);
      } else {
        setCount((prevCount) => prevCount - 1);
      }
      setIncrease(!increase);
    };
  
    const handleBookMarkToggle =()=>{
setBookmark(!bookMark)
    }
   

  
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>{" "}
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src={postImage} alt="Post Image" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className={increase ? 'increase-button postIcon' : 'decrease-button postIcon'} onClick={handleLikeToggle}></FavoriteBorderIcon>
              <ChatBubbleOutlineIcon className="postIcon" />  
           
          
            <TelegramIcon className="postIcon" />
          </div>
         
          <div className="post__iconSave">
            <BookmarkBorderIcon className={bookMark ? 'removeBookmark-button postIcon' : ' addBookmark-button postIcon'} onClick={handleBookMarkToggle}/>
          </div>
        </div>
         {count} likes
      </div>
   </div>
  );
}

export default Post;
