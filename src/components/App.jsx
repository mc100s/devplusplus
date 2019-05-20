import React, { useEffect } from 'react';
import MainNavbar from './MainNavbar';
import { Container } from 'reactstrap'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Program from './pages/Program';

function App() {
  useEffect(() => {
    console.log("useEffect")
    if (localStorage.getItem('light-theme')) {
      document.body.classList.add("light-theme")
    }
  }, [])
  return (
    <div className="App">
      <MainNavbar />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/program" exact component={Program} />
          <Route component={Error404} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
