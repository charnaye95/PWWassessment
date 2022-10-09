import React from 'react'
import navlogo from '../assets/RFA Logo Final.png'
import menu from '../assets/menu.png'
import searchblue from '../assets/searchblue.png'


function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div className='brand'>
          <div className='dropdown'>
            <button className='nav-toggle'>
              <img src={menu} alt='toggle to open navbar menu'></img>
              <p>MENU</p>
              <div className='dropdown-menu'>
                <div className='dropdown-left'>
                  <a href='http://localhost:3000/' className='dropdown-left-link-one'>Home</a>
                  <a href='https://rfa.sc.gov/calendar' className='dropdown-left-link-two'>News & Events</a>
                  <a href='https://rfa.sc.gov/page/about-us' className='dropdown-left-link-three'>About Us</a>
                  <a href='https://rfa.sc.gov/contact-us' className='dropdown-left-link-four'>Contact Us</a>
                  <a href='https://rfa.sc.gov/boards-committees' className='dropdown-left-link-five'>Boards & Committees</a>
                </div>
                <div className='dropdown-right'>
                  <div className='dropdown-data-div'>
                    <p>DATA & RESEARCH</p>
                    <div className='uc-block'></div>
                    <a href='https://rfa.sc.gov/data-research/state-finances' className='dropdown-right-link'>Economy</a>
                    <a href='https://rfa.sc.gov/data-research/state-finances' className='dropdown-right-link'>State Finances</a>
                    <a href='https://rfa.sc.gov/data-research/education' className='dropdown-right-link'>Education</a>
                    <a href='https://rfa.sc.gov/data-research/healthcare' className='dropdown-right-link'>Healthcare</a>
                    <a href='https://rfa.sc.gov/data-research/local-government' className='dropdown-right-link'>Local Government</a>
                    <a href='https://rfa.sc.gov/data-research/population-demographics/census-state-data-centers' className='dropdown-right-link'>Population and Demographics</a>
                    <a href='https://rfa.sc.gov/data-research/state-finances' className='dropdown-right-link'>State Register Calculations</a>
                    <a href='https://rfa.sc.gov/data-research/state-finances' className='dropdown-right-link'>Presentations</a>
                  </div>
                  <div className='dropdown-geography-div'>
                    <p>GEOGRAPHY & MAPPING</p>
                    <div className='uc-block'></div>
                    <a href='https://rfa.sc.gov/mapping/tcn' className='dropdown-right-link'>Transportation Carrier Network (Uber)</a>
                    <a href='https://rfa.sc.gov/programs-services/geodetic/rtnstatus' className='dropdown-right-link'>SC Real Time Network</a>
                    <a href='https://rfa.sc.gov/boards-committees' className='dropdown-right-link'>SC State GIS</a>
                    <a href='https://rfa.sc.gov/data-services/mapping' className='dropdown-right-link'>Maps</a>
                    <a href='https://rfa.sc.gov/programs-services/precinct-demographics/jurisdictional-mapping' className='dropdown-right-link'>Interactive Mapping</a>
                    <a href='https://rfa.sc.gov/programs-services/geodetic/statewide-aerial-imagery' className='dropdown-right-link'>Statewide Aerial Imagery</a>
                  </div>
                  <div className='dropdown-programs-div'>
                    <p>PROGRAMS & SERVICES</p>
                    <div className='uc-block'></div>
                    <a href='https://rfa.sc.gov/programs-services/precinct-demographics' className='dropdown-right-link'>Precinct Demographics and Redistricting</a>
                    <a href='https://rfa.sc.gov/programs-services/state-9-1-1-program' className='dropdown-right-link'>State 911 Program</a>
                    <a href='https://rfa.sc.gov/programs-services/data-services-online-solutions' className='dropdown-right-link'>Data Services and Online Solutions</a>
                    <a href='https://rfa.sc.gov/programs-services/geodetic' className='dropdown-right-link'>Geodetic Survey</a>
                    <a href='https://rfa.sc.gov/programs-services/fiscal-analysis' className='dropdown-right-link'>Fiscal Analysis</a>
                    <a href='https://www.census.gov/library/stories/state-by-state/south-carolina-population-change-between-census-decade.html' className='dropdown-right-link'>2020 Census</a>
                  </div>
                  <div className='dropdown-legislative-div'>
                    <p>LEGISLATIVE FISCAL IMPACTS</p>
                    <div className='uc-block'></div>
                    <a href='https://rfa.sc.gov/impacts' className='dropdown-right-link'>Current General Assembly Session</a>
                    <a href='https://rfa.sc.gov/impacts' className='dropdown-right-link'>Previous General Assembly Session</a>
                    <a href='https://rfa.sc.gov/impacts' className='dropdown-right-link'>Forms</a>
                  </div>

                </div>
              </div>
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
          <div className='dropdown'>
            <button className='nav-search'>
              <img src={searchblue} className='searchblue' alt='blue magnifying glass'></img>
              <div className='search-input-dropdown'>
                <input type='text' className='nav-search-input' placeholder='Enter search term'></input>
                <button className='dropdown-search-button'>SEARCH</button>
              </div>
            </button>
          </div>

        </div>
      </div>
      <div className='services-block'></div>

    </>
  )
}

export default Navbar