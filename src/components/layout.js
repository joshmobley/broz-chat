/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, withPrefix } from "gatsby"

import "./reset.scss"
import "./layout.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <main>
        <header>
          <div class="wrapper">
          <h1>BrozChat</h1>
          </div>
        </header>
        <section>
          <div class="wrapper">
            <div class="tile">
            <div>
              <h2>Next Game Night</h2>
              <h3>April 2</h3>

            </div>
            </div>
            <div class="tile">
            <div><h2>Title</h2>
              <h3>Battlefield V</h3>
              <h2>Mode</h2>
              <p>Firestorm: Survive and Advance!</p>
            

            </div>
              </div>

            <img src={withPrefix('/bfv-firestorm.jpg')} />
          
          </div>
          </section>
      </main>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
