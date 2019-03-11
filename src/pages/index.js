import React, { memo } from "react"
import Particles from "react-particles-js"
import { Spring } from "react-spring/renderprops"
import params from "../resources/particles-params.config"

import Jumbotron from "../blocks/Jumbotron/index"
import { Row } from "../blocks/shared/index"

import AnimatedTextRow from "../components/animated-text-row"
import Layout from "../components/layout"
import SEO from "../components/seo"
import seoConfig from "../resources/seo.config"

const IndexPage = memo(() => (
  <Layout>
    <SEO title="Homepage" keywords={seoConfig.homepage} />
    <Jumbotron>
      <Particles className="particle-js" params={params} />

      <Jumbotron.TextContainer className="presentation">
        <AnimatedTextRow text="Welcome to," />
        <AnimatedTextRow text="Patryk Krasuski Front end Developer Homepage" />
        <Row centredText>
          <Spring
            from={{ opacity: 0, marginTop: -500 }}
            to={{ opacity: 1, marginTop: 0 }}
          >
            {props => {
              return (
                <Jumbotron.Text
                  style={props}
                  textColor="#977494"
                  textSize="20px"
                >
                  From here You can
                </Jumbotron.Text>
              )
            }}
          </Spring>
        </Row>
      </Jumbotron.TextContainer>
    </Jumbotron>
  </Layout>
))

export default IndexPage
