import React, {useState} from 'react';
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal';


function CartModal(props) {

  const resetModal = () => {
    props.handleClose()
  };
  

  return (
    <Modal
      show={props.show}
      onHide={resetModal}
      backdrop="static"
      keyboard={false}
      centered
    >
      <ModalHeader>
        <button onClick={() => console.log(props.data)}>debugger!</button>
        <div>
          <span onClick={props.handleClose}>
            x
          </span>
          <Modal.Title>Cart</Modal.Title>
        </div>
      </ModalHeader>





      { props.data.length > 0 ?
        <ModalBody>
          <div className="quantityContainer noselect">
            <div className="cartItem">

            </div>
          </div>
        </ModalBody>

        : <ModalBody>
            <p className="emptyMessage">Theres nothing here!</p>
          </ModalBody>
      }




      <Modal.Footer>
        {/* <button variant="primary" onClick={() => {
          props.addToCart([props.data, quantity])
          resetModal()
        }}> Add to Cart </button>
        <button variant="secondary" onClick={resetModal}> Close </button> */}

        uoooo
      </Modal.Footer>
    </Modal>
  );
}

const ModalHeader = styled.div`
  border-bottom: .6px solid grey;
  div{
    padding: .5rem;
    text-align: center;

    span{
      position: absolute;
      left: calc(100% - 2rem);
      text-decoration: none;
      cursor: pointer;
      font-size: 1.8rem;
      padding-right: .5rem;
    }
  }
`
const ModalBody = styled.div`
  border-bottom: .6px solid grey;
  padding: 1rem;
  .quantityContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    span{
      padding: .3rem .8rem .3rem .8rem;
      border-radius: .5rem;
      font-size: 1.3rem;
      font-weight: bold;
      text-align: center;
    }

    .increase{
      background-color: #5cd65c;
      border-radius:  .5rem 2rem 2rem .5rem;
    }

    .decrease{
      background-color: #ff5c33;
      border-radius:  2rem .5rem .5rem 2rem;
    }

    p{
      margin:0 0 0 1rem;
    }

    .quantity{
      width: 2.5rem;
      text-align: center;
      margin: 0 .3rem 0 .3rem;
    }
  }
`

const CartPageContainer = styled.div`
  display: inline-block;
  margin: 1rem;
`


export default CartModal;