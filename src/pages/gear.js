import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GearReviews = () => (
  <Layout>
    <SEO title="Gear Reviews" />
    <div className="wrapper">
      <h1>Wow, look at all this gear!</h1>
      <p>We're reviewing it because we hope we will get sponsored</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default GearReviews
