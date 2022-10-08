import React from 'react'
import footerlogo from '../assets/Group 262.png'

function Footer() {
  return (
    <div className='footer'>
      <div className='column-one'>
        <p className='footer-title'>South Carolina
          <br></br>
          Revenue and Fiscal Affairs Office</p>
        <img src={footerlogo} alt='transparent logo' className='footer-logo'></img>
      </div>
      <div className='column-two'>
        <a href='https://rfa.sc.gov/page/privacy-statement'>Privacy Statement</a>
        <a href='https://rfa.sc.gov/page/foia'>FOIA</a>
        <a href='https://rfa.sc.gov/agency-disclosures-and-reporting-requirements'>Disclosures and Reporting</a>
        <a href='https://oig.sc.gov/file-complaint'>Report Fraud</a>
        <a href='https://rfa.sc.gov/page/accessibility'>Accessibility</a>
        <a href='https://rfa.sc.gov/contact-us'>Contact Us</a>
      </div>
      <div className='column-three'>
        <div>
          <p className='footer-header'>MAIN OFFICE</p>
          <p>1000 Assembly St, Rembert Dennis Building, Suite 421
            <br></br>
            Columbia, SC 29201
          </p>
        </div>
        <div>
          <p className='footer-header'>GEODETIC SURVEY SECTION</p>
          <p>5 Geology Rd
            <br></br>
            Columbia, SC 29212</p>
        </div>
        <div>
          <p className='footer-header'>HEALTH AND DEMOGRAPHICS DIVISION</p>
          <p>1000 Assembly St, Rembert Dennis Building, Suite 240
            <br></br>
            Columbia, SC 29201
          </p>
        </div>

      </div>

    </div>
  )
}

export default Footer