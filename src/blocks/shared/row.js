 import styled from 'styled-components';
 
 const Row = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  text-align: ${props => props.centredText ? 'center' : 'initial'};
`;

export default Row;
