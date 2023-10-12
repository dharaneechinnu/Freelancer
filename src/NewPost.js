import React from 'react'
import Nav from './Nav'

const NewPost = ({handlesubmit,postMail,setMail,postTitle,setPostTitle,postbody,setPostBody,search,setsearch}) => {
  return (
   <main className="NewPost">
    <Nav search={search} setsearch={setsearch}/>
    <h2>New Post</h2>
    <form className="newPostForm" onSubmit={handlesubmit}>
      <label htmlFor="posttitle">Title:</label>
      <input
      id="postTitle"
      type="text"
      placeholder='Ex:Machine Learning'
      required
      value={postTitle}
      onChange={(e) => setPostTitle(e.target.value)}
      />
      <label htmlFor="postMail">Email:</label>
        <input
          id="postMail"
          type="email"
          placeholder='Ex:example@gmail.com'
          required
          value={postMail}
          onChange={(e) => setMail(e.target.value)}  // Assuming this is setMail
        /> 
      <label htmlFor='PostBody'>Description:</label>
      <textarea
      id="postbody"
      placeholder='Job Description'
      required
      value={postbody}
      onChange={(e) => setPostBody(e.target.value)}/>
      <button type="sumbit" className='sumbitbtn'>Sumbit</button>
    </form>
   </main>
  )
}

export default NewPost
