import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Sitemap from '../components/Sitemap'
import ServicesAndLinks from '../components/ServicesAndLinks'
import UpdatesAndCalendar from '../components/UpdatesAndCalendar'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <div>
        <Navbar />
        <Search />
        <Sitemap />
        <ServicesAndLinks />
        <UpdatesAndCalendar />
        <Footer />
    </div>
  )
}

export default Homepage