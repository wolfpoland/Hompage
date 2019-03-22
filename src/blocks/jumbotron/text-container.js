import styled from "styled-components"

const TextContainer = styled.div`
  width: 100%;
  min-height: 40vh;
  background-color: rgba(243, 250, 251, 0.3);
  margin: 7vh 5vw;
  box-sizing: border-box;
  padding: 17px;

  @media (max-width: 1000px) {
      margin: 0;
      min-height: 0;
      transition: 500ms;
  }
`

export default TextContainer
