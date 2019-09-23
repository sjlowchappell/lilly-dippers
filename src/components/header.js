import React from "react"

function Header() {
  return (
    <header className="App-header">
      <div className="wrapper">
        <h1>The Lilly Dippers</h1>
        <nav>
          <ul>
            <li>
              <Link to="../pages/page-2/">About</Link>
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
  )
}

export default Header
