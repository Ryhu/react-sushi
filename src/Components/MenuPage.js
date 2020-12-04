import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import MenuCategory from './MenuCategory'
import MenuItemModal from './MenuItemModal'
import CartModal from './CartModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'; 

function MenuPage(props) {
  const [showItemModal, setShowItemModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [itemModalData, setItemModalData] = useState(null);
  const [cart, setCart] = useState([])

  const handleCloseItemModal = () => setShowItemModal(false);
  
  const handleShowItemModal = (menuItemData) => {
    setItemModalData(menuItemData)
    setShowItemModal(true)
  };
  
  const handleCloseCartModal = () => setShowCartModal(false);
  
  const handleShowCartModal = () => setShowCartModal(true);
  
  const addToCart = (cartItem) => {
    setCart(cart.concat(cartItem))
    handleCloseItemModal()
  }

  return (
    <MenuPageContainer>
    {/* <button onClick={() => console.log(props.data)}>hohohohoho</button> */}
      <SideNav>
        {
          Object.keys(props.data).length > 1 &&
            Object.keys(props.data).map(key => {
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

      <CartModal setData={setCart} show={showCartModal} handleClose={handleCloseCartModal}></CartModal> 

      <Body>
        {
          Object.keys(props.data).length > 1 &&
            Object.keys(props.data).map(key => {
              return <MenuCategory data={props.data[key]} name={key} setItemModalData={handleShowItemModal} addToCart={addToCart} key={key} ></MenuCategory>
            })
        }
      </Body>
    </MenuPageContainer>
  );
}

const MenuPageContainer = styled.div`
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

const mapStateToProps = (state) => ({data: state.menu.data});
 
export default connect(mapStateToProps)(MenuPage);