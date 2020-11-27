import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components'
import MenuCategory from './Components/MenuCategory'
import MenuItemModal from './Components/MenuItemModal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faCircle } from '@fortawesome/free-solid-svg-icons'


function App() {

  const [data, setData] = useState({})
  const [show, setShow] = useState(false);
  const [itemModalData, setItemModalData] = useState(null);
  const [cart, setCart] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = (menuItemData) => {
    setShow(true)
    setItemModalData(menuItemData)
  };

  const addToCart = (dataAndQuantity) => {
    setCart(cart.concat([dataAndQuantity]))
    handleClose()
  }

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
        {
          Object.keys(data).length > 1 &&
            Object.keys(data).map(key => {
              return <a className="sideNavButton" href={"#menuCategory" + key} key={key}>
                { key }
              </a>
            })
        }
      </SideNav>

      <CartButton>
        <span class="fa-stack fa-2x">
          <FontAwesomeIcon className="fa-stack-2x circle" icon={faCircle} />
          <FontAwesomeIcon className="fa-stack-1x" icon={faShoppingCart} />
        </span>
      </CartButton>

      { itemModalData && 
        <MenuItemModal data={itemModalData} show={show} handleClose={handleClose} addToCart={addToCart}></MenuItemModal> }

      <Body>
        {
          Object.keys(data).length > 1 &&
            Object.keys(data).map(key => {
              return <MenuCategory data={data[key]} name={key} setItemModalData={handleShow} addToCart={addToCart} key={key} ></MenuCategory>
            })
        }
      {/* <MenuCategory data={data}></MenuCategory> */}
      </Body>
      <button onClick={() => console.log(cart)}>debugger!</button>
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
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  transition: 0.3s;

  .sideNavButton {
    padding: 0.5rem;
    background-color: grey;
    color: white;
    text-decoration: none;
    border-radius: 0 1rem 1rem 0;
    margin: 0.2rem;
    margin-left: 0;
    :hover{
      color:white;
      background-color: blue;
      transition: 0.5s;
    }
  }
`

const CartButton = styled.div`
  font-size: 1.3rem;
  position: fixed;
  top: calc(100% - 7.3rem);
  left: calc(80% + (20% - 2rem) / 2);
  color: white;
  border-radius: 100%;
  .fa-stack{
    .circle{
      transition: 0.5s;
      color: gray;
    }
    :hover{
      .circle{
        color: blue;
      }
    }
  }
`

const Body = styled.div`
  width: 80vw;
  text-align: center;
  margin: auto;
`


export default App;
// 