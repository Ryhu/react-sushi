import React, {useState} from 'react';
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal';


function MenuItemModal(props) {

  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const resetModal = () => {
    setQuantity(1)
    props.handleClose()
  };
  

  return (
    <Modal
      show={props.show}
      onHide={resetModal}
      backdrop="static"
      keyboard={false}
    >
      <ModalHeader>
        <div>
          <Modal.Title>{props.data.attributes.name}</Modal.Title>
          <span onClick={resetModal}>
            x
          </span>
        </div>
        <p className="headerPrice">{'$' + props.data.attributes.price.toFixed(2)}</p>
      </ModalHeader>

      <ModalBody>
        <p>{props.data.attributes.description}</p>
        <div className="quantityContainer noselect">
          <span className="decrease" onClick={decreaseQuantity} >-</span>
          <input className="quantity" type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
          <span className="increase" onClick={increaseQuantity} >+</span>
          <p>{'$' + (props.data.attributes.price * quantity).toFixed(2)}</p>
        </div>
      </ModalBody>

      <Modal.Footer>
        <button variant="primary" onClick={() => {
          props.addToCart([props.data, quantity])
          resetModal()
        }}> Add to Cart </button>
        <button variant="secondary" onClick={resetModal}> Close </button>
      </Modal.Footer>
    </Modal>
  );
}

const ModalHeader = styled.div`
  border-bottom: .6px solid grey;
  div{
    padding: .5rem .5rem 0 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span{
      text-decoration: none;
      cursor: pointer;
      font-size: 1.8rem;
      padding-right: .5rem;
    }
  }

  .headerPrice{
    margin-left: 1rem;
    font-weight: 600;
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

const MenuItemModalContainer = styled.div`
  display: inline-block;
  margin: 1rem;
`


export default MenuItemModal;