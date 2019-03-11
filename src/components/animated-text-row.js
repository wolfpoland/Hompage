import React, { memo } from "react"
import { Trail } from "react-spring/renderprops"
import uuid from "uuid"

import Jumbotron from "../blocks/Jumbotron/index"
import { Row } from "../blocks/shared/index"

const transformToAnimatedText = text => {
  const arrText = text.split(" ")

  return arrText.map(word => ({
    key: uuid.v4(),
    text: word,
  }))
}

const AnimatedTextRow = memo(({ text }) => {
  let items = []

  items = transformToAnimatedText(text)

  return (
    <Row>
      <Trail
        items={items}
        keys={item => item.key}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {item => props => (
          <Jumbotron.Text style={props}>{item.text}</Jumbotron.Text>
        )}
      </Trail>
    </Row>
  )
})

export default AnimatedTextRow
