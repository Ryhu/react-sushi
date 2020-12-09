import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components'
import { Route, Switch, Link } from 'react-router-dom';
import MenuPage from './Components/MenuPage'
import HomePage from './Components/HomePage'
import CheckoutPage from './Components/CheckoutPage'
import { connect } from 'react-redux'; 

function App(props) {
  const [show, setShow] = useState(true)
  const [scrollPos, setScrollPos] = useState(0)

  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top)
    setShow(document.body.getBoundingClientRect().top > scrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    // heroku server
    fetch('https://react-sushi-backend.herokuapp.com/menu_items', {
    // fetch('http://localhost:3000/menu_items', {
      method: 'get',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        let categories = {}

        data.data.forEach(menuItem => {
          if (categories[menuItem.attributes.category]){
            categories[menuItem.attributes.category] = categories[menuItem.attributes.category].concat(menuItem)
          } else {
            categories[menuItem.attributes.category] = [menuItem]
          }
        })
        props.SetData(categories);
      });
  }, []);

  return (
    <div className="App">
      <HeaderContainer>
        <div className={(show ? "active" : "hidden") + " header"}>
          <Link to="/"><span className="headerOption">Home</span></Link>
          <Link to="/menu"><span className="headerOption">Menu</span></Link>
          {/* <Link to="/checkout"><span className="headerOption">Checkout(hidden)</span></Link> */}
        </div>
      </HeaderContainer>
      <main>
        <Switch>
          <Route path="/menu" component={MenuPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/" component={HomePage} />
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

const mapDispatchToProps = dispatch => {
  return {
    SetData: (data) => dispatch({ type: 'SET_DATA', data: data }),
  };
};

export default connect(null, mapDispatchToProps)(App);