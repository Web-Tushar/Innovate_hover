import React from 'react'
import Navber from './component/navber/Navber'
import Banner from './component/banner/Banner'
import Service from './component/service_part/Service'
import Experience from './component/experience_part/Experience'

const App = () => {
  return (
    <div>
      <Navber />
      <Banner />
      <Service />
      <Experience />
    </div>
  )
}

export default App