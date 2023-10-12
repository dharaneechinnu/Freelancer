import About from "./About";
import NewPost from "./NewPost";
import Home from "./Home";
import {format, set} from "date-fns"
import { useEffect, useState } from "react";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import PostPage from "./PostPage";
import api from "./api/Posts";
import EditPost from "./EditPost";
import Login from "./pages/Login";
import Main from "./dash/Main";
import Hm from "./Hm";
import Freeabout from "./Freeabout";



function App() {
  const [posts,setposts] = useState([])

  const [search,setsearch] =useState('')
  const [searchresults,setsearchresult]= useState([])
  const [postTitle,setPostTitle] = useState('');
  const [postMail,setMail] = useState('');
  const [postBody,setPostBody] = useState('');
  const [editTitle,setEditTitle] = useState('');
  const [editBody,setEditBody] = useState('');
  const [editmail,seteditmail] = useState('');
  const navigate = useNavigate();


  useEffect(() =>{
    const fetchPosts =async () => {
      try {
        const response = await api.get('/posts');
        setposts(response.data);
      }catch (err) {
        if (err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else{
          console.log(`Error : ${err.message}`);
        }
      }
    }
    fetchPosts();
  },[])
useEffect(() =>{
  const filteredResults = posts.filter((post) =>((post.body).toLowerCase()).includes(search.toLowerCase())|| ((post.title).toLowerCase()).includes(search.toLowerCase()));
  setsearchresult(filteredResults.reverse());
},[posts,search])

const handlesumbit = async (e) => {
  e.preventDefault();
  const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  const datetime = format(new Date(), 'MMMM dd yyyy pp');
  const newPost = {
    id,
    title: postTitle,
    email: postMail,
    datetime,
    body: postBody
  };
  try {
    const response = await api.post('/posts', newPost);
    const allposts = [...posts, response.data];
    setposts(allposts);
    setPostTitle('');
    setMail(''); 
    setPostBody('');
    navigate('/home');
  } catch (err) {
    console.log(`Error : ${err.message}`);
  }
};

    const handledelete = async(id) =>{
      try{
        await api.delete(`/posts/${id}`)
      const postsList = posts.filter(post => post.id !==id);
      setposts(postsList);
      navigate('/home')
      }
      catch (err){
        console.log(`Error: ${err.message}`);
      }
    }
    const handleEdit = async (id) =>{
      const datetime = format(new Date(),'MMMM dd yyyy pp');
      const updatapost = {id,title: editTitle,email: editmail,datetime,body:editBody};
      try{
        const reponse = await api.put(`/posts/${id}`,updatapost)
        setposts(posts.map(post => post.id===id ? {...reponse.data}:post));
      setEditTitle('');
      seteditmail('');
      setEditBody('');
      navigate('/home')
      }
      catch(err)
      {
        console.log(err.message);
      }
    }
  return ( 
    
    <div className="App">
        {/* <Header
        title="Social Media"
        /> */}
      
       
       
         <Routes><Route path="/" element={<Login/>}></Route></Routes>
         <Routes><Route path="/dashboard" element={<Main/>}></Route></Routes>
       <Routes><Route path="/dd" element={<Hm posts={searchresults} search={search} setsearch={setsearch}/>}></Route></Routes>
       <Routes><Route path="/Freeabout" element={<Freeabout search={search} setsearch={setsearch}/>}></Route></Routes>
          <Routes>
           <Route  path="/home"  element={<Home
              posts={searchresults}
              search={search}
              setsearch={setsearch}
              />}/>
              <Route path="/post"> 
              <Route index element={<NewPost
      handlesubmit={handlesumbit}
      postTitle={postTitle}
      setPostTitle={setPostTitle}
      postBody={postBody}
      postMail={postMail}
      setMail={setMail}
      setPostBody={setPostBody} 
      search={search}
      setsearch={setsearch}
    />
  }
/>
 <Route path=":id" element={<PostPage posts={posts}  handledelete={handledelete}/>}/>
              </Route>
              <Route path="/edit/:id" element={<EditPost
              posts={posts}
              handleEdit={handleEdit}
              editBody={editBody}
              setEditBody={setEditBody}
              editTitle={editTitle}
              editmail={editmail}
              seteditmail={seteditmail}
              setEditTitle={setEditTitle}
              />}/>
              <Route path="/about" element={<About search={search} setsearch={setsearch}/>}/>
            
              </Routes>
    
    
    </div>
    
  );
}

export default App;
