import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './Nav';
const EditPost = ({posts,search,setsearch,handleEdit,editBody,setEditBody,editTitle,setEditTitle,editmail,seteditmail}) => {
         const {id} =useParams();
         const post = posts.find(post => (post.id).toString()=== id);
         useEffect(()=> {
            if(post){
                setEditTitle(post.title);
                setEditBody(post.body);
            }
         },[post,setEditBody,setEditTitle])
    return (
        <main className="NewPost">
              <Nav search={search} setsearch={setsearch}/>
        {editTitle &&
            <>
                <h2>Edit Post</h2>
                <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="postTitle">Title:</label>
                    <input
                        id="postTitle"
                        type="text"
                        required
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                    />
                      <label htmlFor="postMail">Email:</label>
        <input
          id="postMail"
          type="email"
          required
          value={editmail}
          onChange={(e) => seteditmail(e.target.value)}
        />
                    <label htmlFor="postBody">Post:</label>
                    <textarea
                        id="postBody"
                        required
                        value={editBody}
                        onChange={(e) => setEditBody(e.target.value)}
                    />
                    <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
                </form>
            </>
        }
        {!editTitle &&
            <>
                <h2>Post Not Found</h2>
                <p>Well, that's disappointing.</p>
                <p>
                    <Link to='/home'>Visit Our Homepage</Link>
                </p>
            </>
        }
    </main>
  )
}

export default EditPost