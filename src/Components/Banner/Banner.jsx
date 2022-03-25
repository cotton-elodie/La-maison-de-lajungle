import React from 'react'
import '../Banner/banner.scss'
import logo from '../../assets/logo.png'

 function Banner() {
  return (
    <div className='banner' >
        <img src={logo} alt="logo feuille" className='banner-logo'/>
        <h1 className='banner-title'>La maison de la jungle</h1>
    </div>
  )
}

export default Banner;