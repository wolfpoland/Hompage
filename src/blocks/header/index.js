import styled from "styled-components"

import Content from './content';
import Title from './title';

const Header = styled.header`
  position: fixed;
  width: 100%;
  background-color: rgba(243, 250, 251, 0.7);
  height: 10vh;
`

Header.Content = Content;
Header.Title = Title;

export default Header;
