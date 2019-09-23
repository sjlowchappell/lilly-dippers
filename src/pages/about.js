import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="wrapper">
      <h1>We're a nice family</h1>
      <p>Mom, Dad, and Baby</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default About
