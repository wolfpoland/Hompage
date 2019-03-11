import styled from 'styled-components';

const Text = styled.span`
  font-size: ${props => props.textSize || "40px"};
  padding: 10px 10px 0 0;
  box-sizing: border-box;
  color: ${props => props.textColor || "#3c3f40"};
`


export default Text;
