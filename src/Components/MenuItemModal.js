import React, {useState} from 'react';
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal';


function MenuItemModal(props) {

  const [quantity, setQuantity] = useState(1);
  const [comments, setComments] = useState('');
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const resetModal = () => {
    setQuantity(1)
    setComments('')
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
        <div className="specialInstructions">
          <p> Special instructions </p>
          <textarea value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
        </div>
      </ModalBody>

      <ModalFooter>
        <div className="quantityContainer noselect">
          <span className="decrease" onClick={decreaseQuantity} >-</span>
          <input className="quantity" type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
          <span className="increase" onClick={increaseQuantity} >+</span>
          <p>{'$' + (props.data.attributes.price * quantity).toFixed(2)}</p>
        </div>
        <div className="footerCloseContainer">
          <span className="footerButton addToCart" onClick={() => {
            let item = {
              id: props.data.attributes.id,
              name: props.data.attributes.name,
              price: props.data.attributes.price,
              quantity: quantity,
              comments: comments,
            }
            props.addToCart(item)
            resetModal()
          }}> Add to Cart </span>
          <span className="footerButton closeModal" onClick={resetModal}> Close </span>
        </div>
      </ModalFooter>
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

  .specialInstructions{
    margin-top: 2rem;
    p{
      font-weight: 500;
    }

    textarea{
      width: 100%;
      border-radius: .5rem;
      outline: none;
      padding: .5rem;
    }
  }
`
const ModalFooter = styled.div`
  padding: .5rem .5rem .5rem .5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

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
      border-radius:  .5rem 1rem 1rem .5rem;
    }

    .decrease{
      background-color: #ff5c33;
      border-radius:  1rem .5rem .5rem 1rem;
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

  .footerCloseContainer {
    display: flex;
    flex-direction: row;
    align-items: center;

    .footerButton{
      padding: .5rem .8rem .5rem .8rem;
      height: 3rem;
      border-radius: .5rem;
      text-align: center;
      font-weight: 500;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .addToCart {
      background-color: #5cd65c;
    }

    .closeModal {
      background-color: #ff5c33;
    }
  }
`

const MenuItemModalContainer = styled.div`
  display: inline-block;
  margin: 1rem;
`


export default MenuItemModal;