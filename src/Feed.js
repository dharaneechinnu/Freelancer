import React from 'react';
import Post from './Post';

const Feed = ({ posts,search,setsearch }) => {
  return (
    <>
     {/* <Nav search={search} setsearch={setsearch}/> */}
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default Feed;
