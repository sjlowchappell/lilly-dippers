import React from "react"
import { Link } from "gatsby"

function Header() {
  return (
    <header className="App-header">
      <div className="wrapper headerBox">
        <h1>
          <Link to="/">The Lilly Dippers</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/trips/">Trips</Link>
            </li>
            <li>
              <Link to="/tips/">Tips</Link>
            </li>
            <li>
              <Link to="/gear/">Gear Reviews</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
