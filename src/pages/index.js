import React from "react"
import { withPrefix } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Profile from "../components/profile"

const IndexPage = () => (
  <Layout>
    <section>
      <div className="wrapper">
        <h2 style={{ marginBottom: "1rem" }}>What we're playing</h2>
        <Profile gamertag="Winters2008" id="2533274792786991" />
        <Profile gamertag="NotNowChief" id="2533274808431849" />
        <Profile gamertag="mouseKiller2012" id="2533274930867601" />
        <Profile gamertag="Mobster86" id="2619057640464717" />
        <Profile gamertag="LeeroyNCSU" id="2533274831930548" />
      </div>
    </section>
  </Layout>
)

export default IndexPage
