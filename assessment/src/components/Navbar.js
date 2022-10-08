import React from 'react'
// import MenuNavigation from './MenuNavigation'
import navlogo from '../assets/RFA Logo Final.png'
import menu from '../assets/menu.png'
import searchblue from '../assets/searchblue.png'

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div className='brand'>
          <div className='dropdown'>
            Dropdown
          <button className='nav-toggle'>
            <a href='/'>
              <img src={menu} alt='toggle to open navbar menu'></img>
            </a>
            <p>MENU</p>
          </button>
          </div>
          <img className='nav-logo' src={navlogo} alt='South Carolina RFA logo'></img>
          <div className='nav-left'>
            <h1 className='site-name'>SOUTH CAROLINA
              <br></br>
              REVENUE AND FISCAL AFFAIRS OFFICE</h1>
            <p className='site-motto'>Transforming data into solutions for South Carolina</p>
          </div>
        </div>
        <div className='pages'>
          <a href='https://rfa.sc.gov/page/about-us'><h4>ABOUT US</h4></a>
          <a href='https://rfa.sc.gov/calendar'><h4>EVENTS</h4></a>
          <a href='https://rfa.sc.gov/boards-committees'><h4>BOARDS & COMMITTEES</h4></a>
        <button className='nav-search'><img src={searchblue} className='searchblue'></img></button>
        </div>
      </div>
      {/* <MenuNavigation /> */}
    </>
  )
}

export default Navbar