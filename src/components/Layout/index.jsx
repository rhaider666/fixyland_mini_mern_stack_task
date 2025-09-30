import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({bannerTitle, children}) => {
  return (
    <div>
      <Header bannerTitle={bannerTitle}/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
