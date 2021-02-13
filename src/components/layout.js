/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

// jason = 2533274808431849
// will  = 2533274792786991
// phil  = 2533274930867601
// lee   = 2533274831930548
// me    = 2619057640464717

import React from "react"
import PropTypes from "prop-types"

import "./reset.scss"
import "./layout.scss"

const Layout = ({ children }) => (
  <main>
    <header>
      <div className="wrapper">
        <h1>BrozChat</h1>
      </div>
    </header>
    {children}
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
