import React, { Component } from 'react'

export default class Program extends Component {
  render() {
    return (
      <div>
        <h1>Our Program</h1>
        <p>During the program, we will guide you to make sure you master:</p>

        {/* <h3>JavaScript</h3> */}
        <ul className="program-list">
          <li className="program-list__item">Data Structures and Algorithms</li>
          <li className="program-list__item">A typed language (<em>TypeScript</em>)</li>
          <li className="program-list__item">CSS: Basis (<em>Position</em>, <em>Flexbox</em>, <em>Grid</em>, <em>Animations</em>), CSS Preprocessor (<em>SASS</em>), CSS Framework (<em>Bootstrap</em>), CSS Architecture (<em>BEM</em>)</li>
          <li className="program-list__item">A modern front-end framework (<em>React</em>)</li>
          <li className="program-list__item">A commonly used back-end framework (<em>Express</em>)</li>
          <li className="program-list__item">A state manager (<em>Redux</em>)</li>
          <li className="program-list__item">Git: basic usage and workflow</li>
          <li className="program-list__item">Database: a relational database (<em>SQL</em>) and a NoSQL database (<em>MongoDB</em>)</li>
          <li className="program-list__item">Creation of Rest API with different authentication system</li>
          <li className="program-list__item">Testing: front-end testing (<em>Cypress</em>) and back-end testing (<em>Mocha</em>+<em>Chai</em>)</li>
          <li className="program-list__item">Deployement (<em>AWS</em>)</li>
          <li className="program-list__item">And more based on your need!</li>
        </ul>
      </div>
    )
  }
}
