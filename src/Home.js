import React from 'react'
import Feed from './Feed'
import Nav from './Nav'


const Home = ({posts,search,setsearch}) => {
  return (
   <main className="Home">
 <Nav search={search} setsearch={setsearch}/>
      <Feed posts={posts}/>
   </main>
  )
}

export default Home