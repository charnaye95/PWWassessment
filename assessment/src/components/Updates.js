import React from 'react'
import location from '../assets/locationicon.png'
import clock from '../assets/clockicon.png'
import contact from '../assets/contacticon.png'

function Updates() {
  return (
    <>
      <div className='updates-calendar-section'>
        <div className='updates-section'>
          <p className='title'>Recent Updates</p>
          <div className='uc-block'></div>
          <a
            href="https://rfa.sc.gov/data-research/state-finances"
            className='link'
          >
            Local Government Finance
          </a>
          <p className='generic-text'>
            Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales
          </p>
          <div className='published-text'>
            <p><b>Published:</b> Jan 2, 2020</p> <p className='grey-tag'>Updated</p>
          </div>
          <a
            href="https://rfa.sc.gov/data-research/state-finances"
            className='link'
          >
            Transportation Network Carrier Maps
          </a>
          <div className='published-text'>
            <p><b>Published:</b> Jan 2, 2020</p> <p className='grey-tag'>New</p>
          </div>
          <a
            href="https://rfa.sc.gov/data-research/state-finances"
            className='link'
          >
            BEA Long-Range General Fund Revenue Plan for FY 2019-20 to FY 2022-23
          </a>
          <p className='generic-text'>
            Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales
          </p>
          <div className='published-text'>
            <p><b>Published:</b> Dec 16, 2019</p> <p className='grey-tag'>Updated</p>
          </div>
          <a
            href="https://rfa.sc.gov/data-research/state-finances"
            className='link'
          >
            Budget Development
          </a>
          <div className='published-text'>
            <p><b>Published:</b> Dec 16, 2019</p> <p className='grey-tag'>New</p>
          </div>
          <a
            href="https://rfa.sc.gov/data-research/state-finances"
            className='link'
          >
            November 2019 General Fund Revenue Digest
          </a>
          <div className='published-text'>
            <p><b>Published:</b> Dec 13, 2019</p> <p className='grey-tag'>New</p>
          </div>
        </div>
        <div className='calendar-section'>
          <p className='title'>Calendar of Events</p>
          <div className='uc-block'></div>
          <div className='event-container'>
            <div className='date-box'>
              <p className='month'>NOV</p>
              <p className='day'>22</p>
            </div>
            <div>
              <p className='gold-tag'>Updated</p>
              <p className='event-title'><b>Board of Economic Advisors Meeting</b></p>
              <div className='event-details'>
                <div class='detail'>
                  <img src={location} alt='pinpoint location'></img>
                  <p className='detail-text'>Room 417, Bowers Conference Room, Rembert Dennis Building</p>
                </div>
                <div class='detail'>
                  <img src={clock} alt='clock'></img>
                  <p className='detail-text'>1:30 pm</p>
                </div>
                <div class='detail'>
                  <img src={contact} alt=''></img>
                  <p className='detail-text'>(803) 734-2265</p>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <button className='view-more'>VIEW MORE</button>
    </>
  )
}

export default Updates