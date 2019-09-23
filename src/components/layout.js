/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header /> */}
      <header className="App-header">
        <div className="wrapper">
          <h1>The Lilly Dippers</h1>
          <nav>
            <ul>
              <li>
                <Link to="/page-2/">About</Link>
              </li>
              <li>
                <Link to="/page-2/">Trips</Link>
              </li>
              <li>
                <Link to="/page-2/">Tips</Link>
              </li>
              <li>
                <Link to="/page-2/">Gear Reviews</Link>
              </li>
              <li>
                <Link to="/page-2/">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="wrapper">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          {` `}
          by Sam Low-Chappell
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
