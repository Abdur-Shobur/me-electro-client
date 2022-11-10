import React from 'react'
import Banner from './Banner'
import Myservice from './Myservice'
import NewsLate from './NewsLate'
import Services from './Services'
import Teamember from './Teamember'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <div>
      {/* use helmet  */}
      <Helmet>
        <title>ME ElecTro Home</title>
      </Helmet>

      <Banner />
      <Services />
      <Myservice />
      <Teamember />
      <NewsLate />
    </div>
  )
}

export default Home
