import React, { useEffect, useState } from 'react'
import Header from './header'
import Footer from './footer'

const layout = () => {
  
  

  return (
    <div>
        <Header />
        <div className='layout'>
          <h2>레이아웃</h2>
        </div>
        <Footer />
    </div>
  )
}

export default layout