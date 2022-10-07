import React from 'react'

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
        <div className='date-box'>Nov <br></br> 22</div>
      </div>
    </div>
    <button className='view-more'>VIEW MORE</button>
    </>
  )
}

export default Updates