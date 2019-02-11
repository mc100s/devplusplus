import React, { Component } from 'react';
import './App.scss';
import MainNavbar from './MainNavbar';
import {Container} from 'reactstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavbar />
        <Container>
          <h1>Hello</h1>
        </Container>
      </div>
    );
  }
}

export default App;
