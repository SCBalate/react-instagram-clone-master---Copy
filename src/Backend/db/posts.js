import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    postImage:
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postImage:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },
      username: "Ravishseth",
      createdAt: formatDate(),
      updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postImage:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },
      username: "John Doe",
      createdAt: formatDate(),
      updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },
      username: "Jeremy",
      createdAt: formatDate(),
      updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
      likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },
      username: "Tom Cruise",
      createdAt: formatDate(),
      updatedAt: formatDate(),
  },
];
