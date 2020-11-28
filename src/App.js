import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components'
import MenuCategory from './Components/MenuCategory'
import MenuItemModal from './Components/MenuItemModal'
import CartModal from './Components/CartModal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faCircle } from '@fortawesome/free-solid-svg-icons'


function App() {

  const [data, setData] = useState({})
  const [showItemModal, setShowItemModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [itemModalData, setItemModalData] = useState(null);
  const [cart, setCart] = useState([])

  const addToCart = (cartItem) => {
    setCart(cart.concat(cartItem))
    handleCloseItemModal()
  }

  const handleCloseItemModal = () => setShowItemModal(false);

  const handleShowItemModal = (menuItemData) => {
    setItemModalData(menuItemData)
    setShowItemModal(true)
  };


  const handleCloseCartModal = () => setShowCartModal(false);

  const handleShowCartModal = () => setShowCartModal(true);

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
        <span className="fa-stack fa-2x" onClick={handleShowCartModal}>
          <FontAwesomeIcon className="fa-stack-2x circle" icon={faCircle} />
          <FontAwesomeIcon className="fa-stack-1x" icon={faShoppingCart} />
        </span>
      </CartButton>

      {/* Modals */}
      { itemModalData && 
        <MenuItemModal data={itemModalData} addToCart={addToCart} show={showItemModal} handleClose={handleCloseItemModal}></MenuItemModal> }

      <CartModal data={cart} setCart={setCart} show={showCartModal} handleClose={handleCloseCartModal}></CartModal> 

      <Body>
        {
          Object.keys(data).length > 1 &&
            Object.keys(data).map(key => {
              return <MenuCategory data={data[key]} name={key} setItemModalData={handleShowItemModal} addToCart={addToCart} key={key} ></MenuCategory>
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