import React from 'react';

const BookmarkPage = ({ bookmarkedPosts }) => {
  return (
    <div>
      <h2>Bookmark Page</h2>
      {bookmarkedPosts.map((post) => (
        <div key={post.id}>
          {/* Render bookmarked post */}
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
};

export default BookmarkPage;