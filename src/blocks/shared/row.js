 import styled from 'styled-components';
 
 const Row = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  text-align: ${props => props.centredText ? 'center' : 'initial'};
  display: ${props => props.centredText ? 'block' : 'flex'};
  justify-content: ${props => props.justifyCenter ? 'center' : 'flex-start'};
  flex-wrap: wrap;
`;

export default Row;
