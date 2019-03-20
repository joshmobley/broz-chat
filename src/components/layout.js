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
              <h3>March 26</h3>

            </div>
            </div>
            <div class="tile">
            <div><h2>Title</h2>
              <h3>Call of Duty: WW2</h3>
              <h2>Mode</h2>
              <p>Zombies! We're gonna be slaying the undead and leaving people behind to get swarmed all night!</p>
            

            </div>
              </div>

            <img src={withPrefix('/call-of-duty-ww2.png')} />
          
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
