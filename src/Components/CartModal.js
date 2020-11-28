import React, {useState} from 'react';
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

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
          <div className="cartItem">









            <div className="itemInfo">
              <div className="nameAndQuantity">
                <FontAwesomeIcon icon={faTimes} />
                <span className="quantity">{props.data[0].quantity}</span>
                <span>{props.data[0].name}</span>
              </div>
              <span>{'$' + (props.data[0].quantity * props.data[0].price).toFixed(2)}</span>
            </div>
            <div className="itemComments">
              <span>{props.data[0].comments}</span>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  .cartItem{
    padding: .5rem 1rem .5rem 1rem;
    width: 100%;
    border-bottom: 0.6px solid grey;
    span{
      font-size: 1.3rem;
      text-align: center;
    }
    .itemInfo{
      text-align: left;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .nameAndQuantity{
        display: inline-block;

        svg{
          color: red;
          font-size: 1.2rem;
        }

        .quantity{
          margin: 0 1rem 0 1rem;
        }
      }
    }

    .itemComments{
      span{
        font-size: .9rem;
        margin-left: 2rem;
      }
    }
  }
`

const CartPageContainer = styled.div`
  display: inline-block;
  margin: 1rem;
`


export default CartModal;