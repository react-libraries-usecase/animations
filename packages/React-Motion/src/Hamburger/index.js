
import React, { Component } from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Hamburger />
      </Wrapper>
    );
  }
}
export default App;
