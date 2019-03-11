import styled from 'styled-components';

const Text = styled.span`
  font-size: ${props => props.textSize || "40px"};
  padding-right: 10px;
  box-sizing: border-box;
  color: ${props => props.textColor || "#3c3f40"};
`


export default Text;
