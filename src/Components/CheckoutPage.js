import React, {useState} from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'; 


function CheckoutPage(props) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  return (
    <CheckoutPageContainer>
      <form>
        contact and delivery information
        <LineInput
          type='text'
          name="name"
          autocomplete="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {setName(e.target.value)}} 
        />
        <LineInput
          type='text'
          name="email"
          autocomplete="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}} 
        />
        <LineInput
          type='text'
          name="number"
          autocomplete="number"
          placeholder="Phone"
          value={number}
          onChange={(e) => {setNumber(e.target.value)}} 
        />
        <LineInput
          type='text'
          name="address"
          autocomplete="address"
          placeholder="Address"
          value={address}
          onChange={(e) => {setAddress(e.target.value)}} 
        />
      </form>

      <CartContainer>
        {props.cart.map((item, index) => {
          return (<div className="cartItem" key={index}>
                    <div className="itemInfo">
                      <div className="nameAndQuantity">
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
        <div>
          <span>Total:</span>
          <span></span>
        </div>

      </CartContainer>
    </CheckoutPageContainer>
  );
}

//name, email, number, address
// payment

const CheckoutPageContainer = styled.div`
  width: 80vw;
  text-align: center;
  margin: auto;
`

const CartContainer = styled.div`
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
    padding: .5rem 1.5rem .5rem 1.5rem;
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

const LineInput = styled.input`
  background-color:transparent;
  border:1px solid #e6e600;
  font-size: 1.1rem;
  width: 95%;
  margin-bottom:20px;
  padding: 0.2rem;
`

const Whisper = styled.p`
  font-size: .8rem;
  font-style: italic;
`

const mapDispatchToProps = dispatch => {
  return {
    SetCart: (data) => dispatch({ type: 'SET_CART', data: data }),
  };
};

const mapStateToProps = (state) => ({cart: state.cart.data});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);