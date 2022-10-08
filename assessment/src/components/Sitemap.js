import React from 'react'
import dataresearch from '../assets/Data-Research-Icon.svg'
import geographymapping from '../assets/Geography-Icon.svg'
import programsservices from '../assets/Programs-Icon.svg'
import legislativefiscalimpacts from '../assets/Legislative-Icon.svg'
function Sitemap() {
  return (
    <div className='sitemap-section'>
      <div className='cards'>
        <div className='cards-icon'>
          <a href='https://rfa.sc.gov/page/data-research'>
            <img src={dataresearch} className='data-icon' alt='graph'></img>
          <h5 className='cards-text'>DATA & RESEARCH</h5>
          </a>
        </div>
        <div className='cards-icon'>
        <a href='https://rfa.sc.gov/mapping'>
          <img src={geographymapping} className='geography-icon' alt='globe and outline of South Carolina'></img>
          <h5 className='cards-text'>GEOGRAPHY & MAPPING</h5>
          </a>
        </div>
        <div className='cards-icon'>
        <a href='https://rfa.sc.gov/page/programs-services'>
          <img src={programsservices} className='programs-icon' alt='webpages'></img>
          <h5 className='cards-text'>PROGRAMS & SERVICES</h5>
          </a>
          </div>
        <div className='cards-icon'>
        <a href='https://rfa.sc.gov/page/legislative-fiscal-impacts'>
          <img src={legislativefiscalimpacts} className='legislative-icon' alt='bag of money next to a calculator'></img>
        <h5 className='cards-text'>LEGISLATIVE FISCAL IMPACTS</h5>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Sitemap