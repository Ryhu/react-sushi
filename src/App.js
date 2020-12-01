import React from 'react';
import './App.css';
import styled from 'styled-components'
import { Route, Switch, Link } from 'react-router-dom';
import MenuPage from './Components/MenuPage'
import HomePage from './Components/HomePage'


function App() {
  return (
    <div className="App">
      <Header>
        <Link to="/home"><span className="headerOption">Home</span></Link>
        <Link to="/menu"><span className="headerOption">Menu</span></Link>
      </Header>
      <main>
        <Switch>
            <Route path="/menu" component={MenuPage} />
            <Route path="/home" component={HomePage} />
            {/* <Route path="/shop" component={Shop} /> */}
        </Switch>
      </main>
    </div>
  );
}

const Header = styled.div`
  background-color: blue;
  color: white;

  .headerOption {
    margin: 3rem;
  }
`

export default App;