import React from 'react'
import Feed2 from './Feed2'
import Nav from './Nav'
import HiringHeader from './HiringHeader'


const Home = ({post2,search,setsearch}) => {
  return (
   <main className="Home">
 <Nav search={search} setsearch={setsearch}/>
 <HiringHeader/>
      <Feed2 post2={post2}/>
   </main>
  )
}

export default Home