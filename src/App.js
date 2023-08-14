import "./App.css";
import Homepage from "./Homepage";
import BookmarkPage from "./Bookmark/Bookmark";
import Authenticate from "./authenticate/Authenticate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";
import { BrowserRouter, Route,Routes, Navigate } from 'react-router-dom';
import Newpost from "./Newpost/Newpost";


function App() {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/posts');
        
        const jsonData = await response.json();
        setPosts(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


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

  // const handleAddPost = (newPost) => {
  //   debugger
  //   const postWithId = {
  //     ...newPost,
  //     id: Math.random().toString(), 
  //     content:`${newPost?.content}`
  //   };
  //   setPost((prevPost) => [...prevPost, postWithId]);
  // };
  const handleAddPost = () => {
    const addedPost = {  id: Math.random().toString(), content: newPost };
    setPosts(prevPosts => [...prevPosts, addedPost]);
    setNewPost('');
  };

  const handleEditPost = (postId) => {
    const postToUpdate = posts.find(post => post.id === postId);
    if (postToUpdate) {
      setEditingPostId(postId);
      setNewPost(postToUpdate.content);
    }
  };

  const handleUpdatePost = () => {
    const updatedPosts = posts.map(post =>
      post.id === editingPostId ? { ...post, content: newPost } : post
    );
    setPosts(updatedPosts);
    setEditingPostId(null);
    setNewPost('');
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleToggleBookmark = (postId,isArchived) => {
    debugger
    const postToToggle = posts?.posts?.find(post => post._id === postId);
    if (postToToggle) {
      if (postId.isArchived) {
        const updatedBookmarkedPosts = bookmarkedPosts.filter(post => post._id !== postId);
        setBookmarkedPosts(updatedBookmarkedPosts);
      } else {
        setBookmarkedPosts(prevPosts => [...prevPosts, postToToggle]);
      }
    }
  };


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
        {user ? <Route path="/" exact component={<Authenticate />} /> : <Route path="*" exact component={<Homepage post={posts}/>} />}
        
        <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Homepage key={posts?.id} post={posts} toggleBookmark={handleToggleBookmark}/>} />
     
      <Route path="/Bookmark" element={<BookmarkPage key={posts?.id} post={bookmarkedPosts} toggleBookmark={handleToggleBookmark}/>} />
      <Route path="/create new post" element={<Newpost onAddPost={handleAddPost}/>}/>
      </Routes>
    </BrowserRouter></>
      )}
    </div>
  );
}

export default App;
