import React from 'react'
import location from '../assets/locationicon.png'
import clock from '../assets/clockicon.png'
import contact from '../assets/contacticon.png'

function UpdatesAndCalendar() {
  return (
    <>
      <div className='updates-calendar-section'>
        <div className='updates-section'>
          <p className='title'>Recent Updates</p>
          <div className='uc-block'></div>
          <a
            href="https://rfa.sc.gov/sites/default/files/2021-11/FY%202020%20Report%20for%20Web_0.pdf"
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
            href="https://rfa.sc.gov/mapping/tcn"
            className='link'
          >
            Transportation Network Carrier Maps
          </a>
          <div className='published-text'>
            <p><b>Published:</b> Jan 2, 2020</p> <p className='grey-tag'>New</p>
          </div>
          <a
            href="https://rfa.sc.gov/sites/default/files/BEA%20Long%20Range%20General%20Fund%20Revenue%20Plan%20for%20FY%202017-18%20to%20FY%202020-21.pdf"
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
            href="https://rfa.sc.gov/programs-services/fiscal-analysis"
            className='link'
          >
            Budget Development
          </a>
          <div className='published-text'>
            <p><b>Published:</b> Dec 16, 2019</p> <p className='grey-tag'>New</p>
          </div>
          <a
            href="https://rfa.sc.gov/sites/default/files/November%202019%20General%20Fund%20Revenue%20Digest.pdf"
            className='link'
          >
            November 2019 General Fund Revenue Digest
          </a>
          <div className='published-text'>
            <p><b>Published:</b> Dec 13, 2019</p> <p className='grey-tag'>New</p>
          </div>
          <button className='view-more'><a href='https://rfa.sc.gov/data-research'>VIEW MORE</a></button>
        </div>
        <div className='calendar-section'>
          <p className='title'>Calendar of Events</p>
          <div className='uc-block'></div>
          <div className='event-container first-event'>
            <div className='date-box first-box'>
              <p className='month'>NOV</p>
              <p className='day'>22</p>
            </div>
            <div className='event-info'>
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

          <div className='event-container second-event'>
            <div className='date-box second-box'>
              <p className='month'>NOV</p>
              <p className='day'>23</p>
            </div>
            <div className='event-info'>
              <p className='red-tag'>Cancelled</p>
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

          <div className='event-container third-event'>
            <div className='date-box third-box'>
              <p className='month'>NOV</p>
              <p className='day'>25</p>
            </div>
            <div className='event-info'>
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

          <div className='event-container fourth-event'>
            <div className='date-box fourth-box'>
              <p className='month'>NOV</p>
              <p className='day'>28</p>
              <button className='view-all-events'>
                <a href='https://rfa.sc.gov/calendar'>VIEW ALL EVENTS</a></button>
            </div>

            <div className='event-info'>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdatesAndCalendar