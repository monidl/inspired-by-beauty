import React from "react"
import Layout from "../components/Layout"
import styles from "../sass/error.module.scss"
import { Link } from "gatsby"
import Banner from "../components/Banner"

const Error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops looks like something went wrong">
          <Link to="/" className="btn-white">
            back to home page
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default Error
