import React from 'react';
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function CartModal(props) {

  const removeItem = (index) => {
    props.setData(props.data.slice(0,index).concat(props.data.slice(index+1)))
  };

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      centered
    >
      <ModalHeader>
        {/* <button onClick={() => console.log(props.data)}>debugger!</button> */}
        <div>
          <span onClick={props.handleClose}>
            x
          </span>
          <Modal.Title>Cart</Modal.Title>
        </div>
      </ModalHeader>

      { props.data.length > 0 ?
        <ModalBody>
          {props.data.map((item, index) => {
            return (<div className="cartItem" key={index}>
                      <div className="itemInfo">
                        <div className="nameAndQuantity">
                          <FontAwesomeIcon icon={faTimes} onClick={(e) => {removeItem(index)}}/>
                          <span className="quantity">{item.quantity}</span>
                          <span>{item.name}</span>
                        </div>
                        <span>{'$' + (item.quantity * item.price).toFixed(2)}</span>
                      </div>
                      <div className="itemComments">
                        <span>{item.comments}</span>
                      </div>
                    </div>)
          })}
        </ModalBody>

        : <ModalBody>
            <p className="emptyMessage">There's nothing here!</p>
          </ModalBody>
      }

      <ModalFooter>
        <div className="footerContainer">
          <span className="footerButton resetModal" onClick={() => {props.setData([])}}> Empty Cart </span>
          <span className="footerButton checkout" onClick={() => {}}> Checkout </span>
        </div>
      </ModalFooter>
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
  .emptyMessage{
    font-size: 1.3rem;
    margin: 1.5rem;
    color: grey;
  }
  .cartItem{
    padding: .5rem 1.2rem .5rem 1.2rem;
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
          cursor: pointer;
        }

        .quantity{
          margin: 0 1rem 0 1rem;
        }
      }
    }

    .itemComments{
      margin-top: -.2rem;
      padding-left: 2rem;
      span{
        word-wrap: break-word;
        font-size: .9rem;
        box-sizing: border-box
      }
    }
  }
`

const ModalFooter = styled.div`
  padding: .8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .footerContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    .footerButton{
      padding: .5rem .8rem .5rem .8rem;
      height: 3rem;
      border-radius: .5rem;
      text-align: center;
      font-weight: 500;
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
    }

    .resetModal {
      background-color: #ff5c33;
    }

    .checkout {
      background-color: #5cd65c;
    }
  }
`

export default CartModal;