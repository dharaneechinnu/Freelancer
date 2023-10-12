import React from 'react'
import { Link, useParams } from 'react-router-dom'
const PostPage = ({posts,handledelete}) => {
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString()===id);
  return (
    <main className='PostPage '>
    <article className='post'>
      {post &&
       <>
       <h2>{post.title}</h2>
       <p className="postDate">{post.datetime}</p>
       <p className="postBody">{post.body}</p>
       <div className="email"> <ul><li><a href="mailto:">{post.email}</a></li></ul></div>
       <Link to={`/edit/${post.id}`}><span class="material-symbols-outlined editbutton">
edit
</span></Link>
       <button onClick={() =>handledelete(post.id)}><span class="material-symbols-outlined deletebtn">
delete
</span></button>
       </>
      }
      {!post&&
        <>
        <h2>Post Not found </h2>
        <p>Please go to homepage</p>
        <p>
          <Link to="/home">Vist Our Homepage</Link>
        </p>
        </>
      }
    </article>
  
    </main>
  )
}

export default PostPage