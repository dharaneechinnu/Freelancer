import React from 'react'
import { Link } from 'react-router-dom'
const Lancer = ({search,setsearch}) => {
  return (
    <>
    <nav className='Navs'>
    <h2 className='titlelogo'><Link to="/dashboard">Freelancer</Link></h2>
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search posts</label>
        <input
        id='search'
        type='text'
        placeholder='Search Job'
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        />
      </form>
      <ul>
        
       
        <li><Link to="/dd">Home</Link> </li>
        <li><Link to="/Freeabout">About</Link> </li>
      </ul>
   </nav>
  
   </>
  )
}

export default Lancer