import React from "react"
import { Link } from "gatsby"
import Particles from "react-particles-js"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const Jumbotron = styled.div`
  background-color: #b0e0e6;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  div {
    height: 100%;
    width: 100%;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Jumbotron>
      <Particles
        params={{
          particles: {
            line_linked: {
              enable: true,
              distance: 150,
              color: "#3c3f40",
              opacity: "0.4",
              width: 1,
            },
            color: {
              value: "#3c3f40",
            },
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
            shape: {
              polygon: {
                nb_sides: 5,
              },
              stroke: {
                color: "",
              },
            },
          },
        }}
      />
    </Jumbotron>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
