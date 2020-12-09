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

  const handleCloseItemModal = () => setShowItemModal(false);
  
  const handleShowItemModal = (menuItemData) => {
    setItemModalData(menuItemData)
    setShowItemModal(true)
  };
  
  const handleCloseCartModal = () => setShowCartModal(false);
  
  const handleShowCartModal = () => setShowCartModal(true);
  
  return (
    <MenuPageContainer>
      {/* sidenav and cart button */}
      {
        Object.keys(props.data).length > 1 &&
        (<>
            <SideNav>
              { Object.keys(props.data).map(key => {
                  return <a className="sideNavButton" href={"#menuCategory" + key} key={key}>
                    { key }
                  </a>
              })}
            </SideNav>

            <CartButton>
              <span className="fa-stack fa-2x" onClick={handleShowCartModal}>
                <FontAwesomeIcon className="fa-stack-2x circle" icon={faCircle} />
                <FontAwesomeIcon className="fa-stack-1x" icon={faShoppingCart} />
              </span>
            </CartButton>
        </>)
      }

      {/* Modals */}
      { itemModalData && 
        <MenuItemModal data={itemModalData} show={showItemModal} handleClose={handleCloseItemModal}></MenuItemModal> }
      <CartModal show={showCartModal} handleClose={handleCloseCartModal}></CartModal> 


      <Body>
        { Object.keys(props.data).length > 1 
          ? 
            Object.keys(props.data).map(key => {
              return <MenuCategory data={props.data[key]} name={key} setItemModalData={handleShowItemModal} key={key} ></MenuCategory>
            })
          : 
            <Spinner>
              <div class="spinner-border text-primary" role="status">
              </div>
              <p class="loading-text">The Heroku free server takes a while to load, please allow up to 30 seconds for the server to spin up...</p>
            </Spinner>
        }
      </Body>
    </MenuPageContainer>
  );
}

const Spinner = styled.div`
  height: calc(100vh - 10rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .spinner-border {
    width: 15rem;
    height: 15rem;
    border-width: 1rem;
  }

  .loading-text {
    margin-top: 1.2rem;
    font-weight: 600;
    font-size: 1.3rem;
  }
`

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