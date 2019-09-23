import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Trips = () => (
  <Layout>
    <SEO title="Trips" />
    <div className="wrapper">
      <h1>Check out our trips!</h1>
      <p>More trips to come</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Trips
