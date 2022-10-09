import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Sitemap from '../components/Sitemap'
import ServicesAndLinks from '../components/ServicesAndLinks'
import UpdatesAndCalendar from '../components/UpdatesAndCalendar'
import Footer from '../components/Footer'
import ScrollToTop from 'react-scroll-to-top'

function Homepage() {
  return (
    <div>
      <Navbar />
      <Search />
      <Sitemap />
      <ServicesAndLinks />
      <UpdatesAndCalendar />
      <ScrollToTop smooth top={1000} color='#0074c1' />
      <Footer />
    </div>
  )
}

export default Homepage