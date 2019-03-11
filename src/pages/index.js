import React from "react"
import { Link } from "gatsby"
import Particles from "react-particles-js"
import { Transition, Spring, Trail } from "react-spring/renderprops"
import uuid from "uuid";
import params from '../resources/particles-params';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const Jumbotron = styled.div`
  background-color: #b0e0e6;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;

  .particle-js {
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
`

const Name = styled.div`
  width: 100%;
  height: 40vh;
  background-color: rgba(243, 250, 251, 0.3);
  margin: 7vh 5vw;
  box-sizing: border-box;
  padding: 17px;
`

const NameRow = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`

const NameRowCentered = styled(NameRow)`
  text-align: center;
`

const NameText = styled.span`
  font-size: ${props => props.textSize || "40px"};
  padding-right: 10px;
  box-sizing: border-box;
  color: ${props => props.textColor || "#3c3f40"};
`

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
        <Name className="presentation">
          <NameRow>
            <Trail
              items={welcome}
              keys={item => item.key}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {item => props => <NameText style={props}>{item.text}</NameText>}
            </Trail>
          </NameRow>
          <NameRow>
            <Trail
              items={items}
              keys={item => item.key}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {item => props => <NameText style={props}>{item.text}</NameText>}
            </Trail>
          </NameRow>
          <NameRowCentered>
            <Spring
              from={{ opacity: 0, marginTop: -500 }}
              to={{ opacity: 1, marginTop: 0 }}>
              {props => {
                return (
                  <NameText style={props} textColor="#977494" textSize="20px">
                    From here You can
                  </NameText>
                )
              }}
            </Spring>
          </NameRowCentered>
        </Name>
      </Jumbotron>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
