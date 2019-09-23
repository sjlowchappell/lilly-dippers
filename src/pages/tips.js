import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Tips = () => (
  <Layout>
    <SEO title="Tips" />
    <div className="wrapper">
      <h1>Find out some tripper tips</h1>
      <p>We'll be posting these tips in the near future</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Tips
