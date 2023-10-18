import React from 'react'

const Header = ({search,setsearch}) => {
  return (
     <>
      <header className='header'>
    <h1 className="header-title">
      Find Your<br></br><span>Amazing Jobs</span><br></br>Easily
    </h1>
   </header>
    <div className="search-box">
      <div className="search-card">
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <input
        id='search'
        type='text'
        placeholder='Search Job'
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        />
      </form> 
      </div>
    </div>
     </>
  )
}

export default Header