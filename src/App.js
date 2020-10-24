import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components'
import ItemTile from './Components/ItemTile'


function App() {

  let [data, setData] = useState([])

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
        console.log(data.data)
        setData(data.data)
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

      { (data.length > 0)
        ? (data.map(menuItem => {
          if(menuItem.attributes.name){
            return <ItemTile 
                      name={menuItem.attributes.name} 
                      description={menuItem.attributes.description} 
                      price={menuItem.attributes.price}
                      key={menuItem.attributes.id}>
                    </ItemTile>
          }
        }))
        : <div></div>
      }
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


export default App;
// 