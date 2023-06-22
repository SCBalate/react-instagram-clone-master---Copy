import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    profilePicture:
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      { _id: uuid(), fullName: "John Doe", username: "johndoe",profileAvatar:
      "https://picsum.photos/id/1009/150" },
    
    
    ],
    followers: [
      { _id: uuid(), fullName: "John Doe", username: "johndoe",profileAvatar:
      "https://picsum.photos/id/1009/150" },
      { _id: uuid(), fullName: "Ganesh Mokate", username: "Gunny",profileAvatar:
      "https://picsum.photos/id/100/150" },
      { _id: uuid(), fullName: "Shubham Shelke", username: "shubz",profileAvatar:
      "https://picsum.photos/id/1005/150" },
    ],
  },
  {
    _id: uuid(),
    firstName: "Saurabh",
    lastName: "Balate",
    profilePicture:"",
    username: "savvy",
    password: "Sb@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
     
      { _id: uuid(), fullName: "John Doe", username: "johndoe",profileAvatar:
      "https://picsum.photos/id/1009/150" },
      { _id: uuid(), fullName: "Ganesh Mokate", username: "Gunny",profileAvatar:
      "https://picsum.photos/id/100/150" },
      { _id: uuid(), fullName: "Shubham Shelke", username: "shubz",profileAvatar:
      "https://picsum.photos/id/1005/150" },
    
    
    ],
    followers: [
      { _id: uuid(), fullName: "Ganesh Mokate", username: "Gunny",profileAvatar:
      "https://picsum.photos/id/100/150" },
      { _id: uuid(), fullName: "Shubham Shelke", username: "shubz",profileAvatar:
      "https://picsum.photos/id/1005/150" },
    ],
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Shelke",
    profilePicture:"",
    username: "shubz",
    password: "shubh@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      { _id: uuid(), fullName: "John Doe", username: "John Doe",profileAvatar:
      "https://picsum.photos/id/1009/150" },
      { _id: uuid(), fullName: "Saurabh Balate", username: "savvy",profileAvatar:
      "https://picsum.photos/id/1009/150" },
    
    ],
    followers: [
      { _id: uuid(), fullName: "John Doe", username: "John Doe",profileAvatar:
      "https://picsum.photos/id/1009/150" },
      { _id: uuid(), fullName: "Shubham Shelke", username: "Shubz",profileAvatar:
      "https://picsum.photos/id/100/150" },
      
    ],
  },
  {
    _id: uuid(),
    firstName: "Ganesh",
    lastName: "Mokate",
    profilePicture:"",
    username: "Gunny",
    password: "Ganesh@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      { _id: uuid(), fullName: "John Doe", username: "John Doe",profileAvatar:
      "https://picsum.photos/id/1009/150" },
      { _id: uuid(), fullName: "Saurabh Balate", username: "savvy",profileAvatar:
      "https://picsum.photos/id/1009/150" },
    
    ],
    followers: [
      { _id: uuid(), fullName: "John Doe", username: "johndoe",profileAvatar:
      "https://picsum.photos/id/1009/150" },
      { _id: uuid(), fullName: "Ganesh Mokate", username: "Gunny",profileAvatar:
      "https://picsum.photos/id/100/150" },
      { _id: uuid(), fullName: "Shubham Shelke", username: "shubz",profileAvatar:
      "https://picsum.photos/id/1005/150" },
    ],
  },
  {
    _id: uuid(),
    firstName: "Mandy",
    lastName: "D'souza",
    profilePicture:"",
    username: "mandy",
    password: "Mandy@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
    
    
    ],
    followers: [
    
    ],
  },
  {
    _id: uuid(),
    firstName: "Lara",
    lastName: "Croft",
    profilePicture:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F002%2F257%2Foriginal%2Fbeautiful-woman-avatar-character-icon-free-vector.jpg&tbnid=nYLbb-1FOdSTfM&vet=12ahUKEwjYk-qatNT_AhU-NLcAHcOJBtcQMygBegUIARDvAQ..i&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fwoman-avatar&docid=f1cbKhpiGfpm5M&w=7973&h=7973&q=profile%20image&ved=2ahUKEwjYk-qatNT_AhU-NLcAHcOJBtcQMygBegUIARDvAQ",
    username: "Lara",
    password: "Lara@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
    
    
    ],
    followers: [
    
    ],
  },
];

