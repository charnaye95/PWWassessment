import React from 'react'
import dataresearch from '../assets/Data-Research-Icon.svg'
import geographymapping from '../assets/Geography-Icon.svg'
import programsservices from '../assets/Programs-Icon.svg'
import legislativefiscalimpacts from '../assets/Legislative-Icon.svg'
function Sitemap() {
  return (
    <div className='sitemap-section'>Sitemap
      <div className='cards'>
        <div><img src={dataresearch} className='cards-icon' alt=''></img></div>
        <div><img src={geographymapping} className='cards-icon' alt=''></img></div>
        <div><img src={programsservices} className='cards-icon' alt=''></img></div>
        <div><img src={legislativefiscalimpacts} className='cards-icon' alt=''></img></div>
      </div>
    </div>
  )
}

export default Sitemap