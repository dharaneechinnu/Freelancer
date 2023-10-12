import React from 'react'
import {  useParams } from 'react-router-dom';

const Freepage = ({posts}) => {
    const {id} = useParams();
    const post = posts.find(post => (post.id).toString()===id);
    return (
      <main className='PostPage '>
      <article className='post'>
         <>
         <h2>{post.title}</h2>
         <p className="postDate">{post.datetime}</p>
         <p className="postBody">{post.body}</p>
         <div className="email"> <ul><li><a href="mailto:">{post.email}</a></li></ul></div>

         </>
        
        
      </article>
    
      </main>
    )
}

export default Freepage