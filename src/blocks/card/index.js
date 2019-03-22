import styled from "styled-components"

import Text from "./text"
import Icon from "./icon"

const Card = styled.div`
  border: 0.5px solid ${props => props.borderColor || "#abb4b6"};
  border-radius: 5px;
  height: 170px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  opacity: ${props => (!!props.isNotImplemented ? "0.5!important" : 1)};
  justify-content: space-between;
  background-color: ${props =>
    !!props.isNotImplemented ? "#cad4d6" : props.backgroundColor || "#cad4d6"};
  z-index: 3;
  margin: 3px 6px;

  &:hover {
    transition: 500ms;
    background-color: ${props =>
      !!props.isNotImplemented ? "" : props.hoverBackgroundColor || "#f8f9f9"};
    cursor: ${props => (!!props.isNotImplemented ? "not-allowed" : "pointer")};
  }
`

Card.Text = Text
Card.Icon = Icon

export default Card
