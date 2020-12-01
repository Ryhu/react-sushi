import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components'
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import MenuPage from './Components/MenuPage'
import HomePage from './Components/HomePage'

function App() {

  const [show, setShow] = useState(true)
  const [scrollPos, setScrollPos] = useState(0)

  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top)
    setShow(document.body.getBoundingClientRect().top > scrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="App">
      <HeaderContainer>
        <div className={(show ? "active" : "hidden") + " header"}>
          <Link to="/"><span className="headerOption">Home</span></Link>
          <Link to="/menu"><span className="headerOption">Menu</span></Link>
        </div>
      </HeaderContainer>
      <main>
        <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/menu" component={MenuPage} />
            {/* <Route path="/shop" component={Shop} /> */}
        </Switch>
      </main>
    </div>
  );
}

const HeaderContainer = styled.div`
  padding-top: 4rem;
  .header{
    background-color: blue;
    padding: 1rem;
    position: fixed;
    top: 0;
    width: 100%;
    display: block;
    transition: top 0.3s;
    
    .headerOption {
      color: white;
      margin: 3rem;
      padding: 0.5rem;
    }
  }

  .active {
    visibility: visible;
    transition: 200ms;
  }
  .hidden {
    visibility: hidden;
    transition: 200ms;
    transform: translate(0, -100%);
  }
`

export default App;