// add only components you want to be repetitive under layout
import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../sass/layout.scss"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
