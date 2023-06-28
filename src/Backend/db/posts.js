import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
   content:"A beautiful natural sunset scenery",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "savvy",
    fullName: "Saurabh Balate",
    postImage:
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    createdAt: "2023/06/12",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment:
          "Nice!",
        fullName: "Shubham Soni",
        username: "shubhamsoni",
     
        profileAvatar:
        "https://picsum.photos/id/1005/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
       
      },
      {
        _id: uuid(),
        comment:
          "Wow!",
        fullName: "Saurabh Balate",
        username: "Savvy",
        profileAvatar:
    "https://picsum.photos/id/1012/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
       
      },
    ],
  },
  {
    _id: uuid(),
   content:"The power of nokia mobiles",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    fullName:"Shubham Soni",
    postImage:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    createdAt: "2023/06/21",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment:
          "Nice!",
        fullName: "Shubham Shelke",
        username: "shubz",
        profileAvatar:
        "https://picsum.photos/id/1005/150",
        createdAt: "2022-05-11",
        updatedAt: formatDate(),
        
      },
      {
        _id: uuid(),
        comment:
          "Wow!",
        fullName: "Ganesh Mokate",
        username: "Gunny",
        profileAvatar:
    "https://picsum.photos/id/100/150",
        createdAt: "2022-05-12",
        updatedAt: formatDate(),
       
      },
    ],
  },
  {
    _id: uuid(),
   content:"Enjoying a sunset like this...",
      likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },
      username: "Ravishseth",
      fullName:"Ravish Seth",
      postImage:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      createdAt: "2023/06/22",
      updatedAt: formatDate(),
      comments: [
        {
          _id: uuid(),
          comment:
            "Nice!",
          fullName: "Shubham Shelke",
          username: "shubz",
          profileAvatar:
          "https://picsum.photos/id/1005/150",
          createdAt: formatDate(),
          updatedAt: formatDate(),
         
        },
        {
          _id: uuid(),
          comment:
            "Wow!",
          fullName: "Saurabh Balate",
          username: "Savvy",
          profileAvatar:
      "https://picsum.photos/id/1012/150",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        
        },
      ],
      createdAt: "2022-04-20",
      updatedAt: formatDate(),
    
  },
  {
    _id: uuid(),
   content:"",
      likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },
      username: "John Doe",
      fullName:"John Doe",
      postImage:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      createdAt: "2023/06/20",
      updatedAt: formatDate(),
      comments: [
        {
          
            _id: uuid(),
            comment:
              "Nice!",
            fullName: "Saurabh Balate",
            username: "Savvy",
            profileAvatar:
            "https://picsum.photos/id/1005/150",
            createdAt: formatDate(),
            updatedAt: formatDate(),
          
        }
      ]
  },
  {
    _id: 1,
    content:"",
      likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },
      username: "Jeremy",
      fullName:"Jeremy Buendia",
      postImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      createdAt: "2023/05/20",
      updatedAt: formatDate(),
      comments:[]
  },
  {
    _id: 2,
   content:"",
      likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },
      username: "Tom Cruise",
      fullName:"Tom Cruise",
      postImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
      createdAt: "2023/05/16",
      updatedAt: formatDate(),
      comments:[]
  },
];
