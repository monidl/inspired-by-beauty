// import "rbx/index.css"
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/simpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="landscape lovers"
        info="Its native withdraws without a patent. Every piano feminist faces."
      >
        <Link to="/pictures" className="btn-white">
          explore pictures
        </Link>
      </Banner>
    </SimpleHero>
    <About />
  </Layout>
)
