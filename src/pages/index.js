import React from "react"
import { Link } from "gatsby"
import Particles from "react-particles-js"
import { Spring, Trail } from "react-spring/renderprops"
import uuid from "uuid";
import params from '../resources/particles-params';

import Jumbotron from '../blocks/Jumbotron/index';
import {Row} from '../blocks/shared/index';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const transformToAnimatedTextOpacity = text => {
  const arrText = text.split(" ")

  return arrText.map(word => ({
    key: uuid.v4(),
    text: word,
  }))
}

const IndexPage = () => {
  let items = []
  let welcome = []

  welcome = transformToAnimatedTextOpacity("Welcome into,")

  items = transformToAnimatedTextOpacity(
    "Patryk Krasuski Front end Developer Homepage"
  )

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Jumbotron>
        <Particles
          className="particle-js"
          params={params}
        />
        <Jumbotron.TextContainer className="presentation">
          <Row>
            <Trail
              items={welcome}
              keys={item => item.key}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {item => props => <Jumbotron.Text style={props}>{item.text}</Jumbotron.Text>}
            </Trail>
          </Row>
          <Row>
            <Trail
              items={items}
              keys={item => item.key}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {item => props => <Jumbotron.Text style={props}>{item.text}</Jumbotron.Text>}
            </Trail>
          </Row>
          <Row centredText>
            <Spring
              from={{ opacity: 0, marginTop: -500 }}
              to={{ opacity: 1, marginTop: 0 }}>
              {props => {
                return (
                  <Jumbotron.Text style={props} textColor="#977494" textSize="20px">
                    From here You can
                  </Jumbotron.Text>
                )
              }}
            </Spring>
          </Row>
        </Jumbotron.TextContainer>
      </Jumbotron>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
