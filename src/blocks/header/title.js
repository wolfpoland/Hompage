import styled from "styled-components"

const Title = styled.h1`
  margin: 0;
  a {
    color: #546b6e;
    text-decoration: none;
  }

  @media (max-width: 580px) {
      a {
          font-size: 23px;
      }

  }
`

export default Title;
