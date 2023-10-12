import React from 'react'
import Freepost from './Freepost'

const Fd = ({posts}) => {
  return (
    <>
      {posts.map(post => (
        <Freepost    key={post.id} post={post} />
      ))}
      </>
  )
}

export default Fd