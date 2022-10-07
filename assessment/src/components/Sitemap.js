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
          <img src={dataresearch} className='data-icon' alt=''></img>
          <h5 className='cards-text'>DATA & RESEARCH</h5>
        </div>
        <div className='cards-icon'>
          <img src={geographymapping} className='geography-icon' alt=''></img>
          <h5 className='cards-text'>GEOGRAPHY & MAPPING</h5>
        </div>
        <div className='cards-icon'>
          <img src={programsservices} className='programs-icon' alt=''></img>
          <h5 className='cards-text'>PROGRAMS & SERVICES</h5>
          </div>
        <div className='cards-icon'><img src={legislativefiscalimpacts} className='legislative-icon' alt=''></img>
        <h5 className='cards-text'>LEGISLATIVE FISCAL IMPACTS</h5>
        </div>
      </div>
    </div>
  )
}

export default Sitemap