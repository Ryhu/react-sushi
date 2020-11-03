import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components'
import ItemTile from './Components/ItemTile'
import MenuCategory from './Components/MenuCategory'


function App() {

  let [data, setData] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/menu_item', {
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
        setData(categories)
      });
  }, []);

  return (
    <div className="App">
      <Header>
        <span className="headerOption">Home</span>
        <span className="headerOption">Menu</span>
        <span className="headerOption">Contact</span>
        <span className="headerOption"></span>
      </Header>

      <SideNav>
        <a class="sideNavButton" href={"#menuCategory" + 'Nigiri'}>
          Nigiri
        </a>
      </SideNav>

      <Body>
        {console.log(data)}
        {
          Object.keys(data).length > 1 &&
            Object.keys(data).map(key => {
              return <MenuCategory data={data[key]} name={key}></MenuCategory>
            })
        }

      </Body>

      {/* <MenuCategory data={data}></MenuCategory> */}
    </div>
  );
}





// { Object.keys(data).length > 0
//   ? (data.map(menuItem => {
//       if(menuItem.name){
//         return <ItemTile name={menuItem.name} description={menuItem.description} price={menuItem.price}></ItemTile>
//       }
//      }))

//   : <div></div>
// }



const Header = styled.div`
  background-color: blue;
  color: white;

  .headerOption {
    margin: 3rem;
  }
`

const SideNav = styled.div`
  position: fixed;
  height: 100%;
  top: 50%;

  .sideNavButton {
    height: 2rem;
    padding: 0.5rem;
    background-color: grey;
    color: white;
    text-decoration: none;
    border-radius: 0 1rem 1rem 0;
  }


`

const Body = styled.div`
  width: 80vw;
  text-align: center;
  margin: auto;
`


export default App;
// 