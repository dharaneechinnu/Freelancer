import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <>
   <article className="post">
   <Link to={`/post/${post.id}`}><h2>{post.title}</h2>
    <p className="postDate">{post.datetime}</p>
    </Link>
    <p className="postBody">
      {
        (post.body).length <=25
        ? post.body
        : `${(post.body)}`
      }
    </p>
    <div className="email"><a href="mailto:">{post.email}</a></div>
   </article>
   
   </>
  )
}
  
export default Post