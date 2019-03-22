import React, { memo } from "react"
import { Spring } from "react-spring/renderprops"
import { Link } from "gatsby"
import CardStyled from "../blocks/card/index"

const card = memo(({ color, text, children, link, isNotImplemented }) => (
  <Link to={link || ''}>
    <Spring
      delay={200}
      from={{ opacity: 0, transform: "translate3d(-50%,10%,0)" }}
      to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
    >
      {props => (
        <CardStyled style={props} isNotImplemented={!!isNotImplemented} {...color}>
          <CardStyled.Icon>{children}</CardStyled.Icon>
          <CardStyled.Text>{text}</CardStyled.Text>
        </CardStyled>
      )}
    </Spring>
  </Link>
))

export default card
