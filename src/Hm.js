import React from 'react'
import Fd from './Fd'
import Lancer from './Lancer'


const Hm = ({posts,search,setsearch}) => {
  return (
    <main className="Home">
        <Lancer search={search} setsearch={setsearch}/>
         <Fd posts={posts}/>
      </main>
  )
}

export default Hm