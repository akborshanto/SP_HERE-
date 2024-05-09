import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/footer/Footer'
import Navbar from './../shared/navbar/Navbar';

const Main = () => {
  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>


    </div>
  )
}

export default Main
