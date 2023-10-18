import React from 'react';
import Post from './Post';

const Feed = ({ post2,search,setsearch }) => {
  return (
    <>
     {/* <Nav search={search} setsearch={setsearch}/> */}
      {post2.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default Feed;
