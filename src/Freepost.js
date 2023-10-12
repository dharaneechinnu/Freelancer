import React from 'react'


const Freepost = ({post}) => {
    return (
        <>
       <article className="post">
      <h2>{post.title}</h2>
        <p className="postDate">{post.datetime}</p>
      
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

export default Freepost