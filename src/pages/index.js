import React, { Fragment } from "react"

import Header from "../components/header"
import Body from "../components/body"
import Gallery from "../components/gallery"
import Contact from "../components/contact"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <Fragment>
      <Header />
      <Body />
      <Gallery />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default IndexPage
