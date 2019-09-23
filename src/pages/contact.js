import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="wrapper">
      <h1>Drop us a line</h1>
      <p>We promise we don't bite.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Contact
