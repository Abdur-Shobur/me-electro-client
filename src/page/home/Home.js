import React from 'react'
import Banner from './Banner'
import Myservice from './Myservice'
import NewsLate from './NewsLate'
import Services from './Services'
import Teamember from './Teamember'

function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <Myservice />
      <Teamember />
      <NewsLate />
    </div>
  )
}

export default Home
