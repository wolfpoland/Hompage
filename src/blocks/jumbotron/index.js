import styled from "styled-components"

import TextContainer from "./text-container"
import Text from "./text"

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

Jumbotron.TextContainer = TextContainer
Jumbotron.Text = Text

export default Jumbotron;

