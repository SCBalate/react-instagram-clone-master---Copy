import React, { useState ,useCallback} from 'react';
import { useDropzone } from 'react-dropzone';
import { formatDate } from '../Backend/utils/authUtils';
import axios from 'axios';
import { Button } from 'react-bootstrap';



const NewPost = ({onAddPost}) => {
  const [post, setpost] = useState({
    content: '',
    PostImage: '',
    createdAt: formatDate(),
    
  });


  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleFileUpload = async () => {
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result.split(',')[1];
  
        const imageData = {
          image: base64Image,
        };
  
        try {
          // Make an HTTP POST request to the server to upload the file
          const response = await axios.post('/api/upload', imageData);
  
          // Handle the response from the server
          console.log('Upload successful!', response.data);
        } 
        catch (error) {
          console.error('Error uploading file:', error);
        }
      };
  
    //   reader.readAsDataURL(selectedFile);
    // } catch (error) {
    //   console.error('Error reading file:', error);
    // }
    reader.readAsDataURL(selectedFile);
  } catch (error) {
    console.error('Error reading file:', error);
  }
  }; 

  const handleChange = (e) => {
    const { content, value } = e.target;
    setpost((prevpost) => ({
      ...prevpost,
      [content]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost(post);
    setpost({
      content: '',
      PostImage: '',
    Ingredients: [],
    createdAt: formatDate(),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New post</h2>
      <div>
        <label>Content</label>
        <input type="text" name="content" value={post.content} onChange={handleChange} />
      </div>
      <div>
      <div>
      <h2>Image Uploader</h2>
      <div {...getRootProps()}>
        <input {...getInputProps()} value={post.PostImage}/>
        {isDragActive ? (
          <p>Drop the image here...</p>
        ) : (
          <p>Drag and drop an image here, or click to select a file</p>
        )}
        
      </div>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      <Button onClick={handleFileUpload}>Upload</Button>
    </div>
     
    </div>
      {/* <div>
        <label></label>
        <input
          type="text"
          name="Ingredients"
          value={post.Ingredients}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Method:</label>
        <input
          type="text"
          name="Method"
          value={post.Method}
          onChange={handleChange}
          required
        />
      </div> */}
     
      <button type="submit">Create Post</button>
    </form>
  );
};

export default NewPost;
