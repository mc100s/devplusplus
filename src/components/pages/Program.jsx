import React, { Component } from 'react'

export default class Program extends Component {
  render() {
    return (
      <div>
        <h1>Our Program</h1>
        <p>During the program, we will guide you to make sure you master:</p>

        {/* <h3>JavaScript</h3> */}
        <ul>
          <li>Data Structures and Algorithms</li>
          <li>CSS: Basis (Position, Flexbox, Grid, Animations), CSS Preprocessor (SASS), CSS Framework (Bootstrap), CSS Architecture (BEM)</li>
          <li>Express</li>
          <li>React</li>
        </ul>
      </div>
    )
  }
}
