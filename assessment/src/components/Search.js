import React from 'react'
import searchicon from '../assets/searchicon.png'

function Search() {
  return (
    <>
      <div className='search-section'>
        <div className='search-text'>
          <h3>Providing independent research, analysis, and resources to facilitate informed policy decisions and administration of services</h3>
        </div>
        <form className='main-searchbar'>
          <input type='text' className='main-search-input'
            placeholder='Search rfa.sc.gov'></input>
          <button className='main-search-button'>
            <p>SEARCH</p>
            <img src={searchicon} className='search-icon' alt='magnifying glass'></img>
          </button>
        </form>
      </div>
    </>
  )
}

export default Search