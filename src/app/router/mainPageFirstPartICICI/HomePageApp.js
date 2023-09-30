import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Dashboard from './Dashboard'
import Other from './Other'


const HomePageApp = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' Component={Home}  />
      <Route path='/Home' Component={Home}  />
      <Route path='/AboutUs' Component={AboutUs}  />
      <Route path='/ContactUs' Component={ContactUs}  />
      <Route path='/Dashboard' Component={Dashboard}  />
      <Route path='/other' Component={Other}  />
     
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default HomePageApp
