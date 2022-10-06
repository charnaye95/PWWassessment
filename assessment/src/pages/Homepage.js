import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Sitemap from '../components/Sitemap'
import ServicesAndLinks from '../components/ServicesAndLinks'
import Updates from '../components/Updates'
import Calendar from '../components/Calendar'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <div>
        <h1>Homepage</h1>
        <Navbar />
        <Search />
        <Sitemap />
        <ServicesAndLinks />
        <Updates />
        <Calendar />
        <Footer />
    </div>
  )
}

export default Homepage