import React, { useState } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'; 
import { useLocation } from "react-router-dom";


function CheckoutPage(props) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const location = useLocation();
  const data = location.state;

  return (
    <CheckoutPageContainer>
    <Body>
      <DeliveryForm>
        <h3 class="header">
          Contact and Delivery
        </h3>

        <label>Name</label>
        <LineInput
          type='text'
          name="name"
          autocomplete="name"
          value={name}
          onChange={(e) => {setName(e.target.value)}} 
        />
        {/* <LineInput
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
        /> */}
      </DeliveryForm>

      <CartContainer>
        {data.cart.map((item, index) => {
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

        <div className="footer">
          <span className="subtotal">Subtotal: ${data.price.toFixed(2)}</span>
          <span className="placeOrder">Place Order</span>
        </div>
      </CartContainer>
    </Body>
    </CheckoutPageContainer>
  );
}

//name, email, number, address
// payment



const Body = styled.form`
  width: 80%;
  margin: auto;

`

const DeliveryForm = styled.form`
  width: 70%;
  background-color: #F0F0F0;
  padding: 1rem;
  border-radius: 10px;
  border:.5px solid grey;

  .header {

  }
`

const LineInput = styled.input`
  border:1px solid grey;
  font-size: 1.1rem;
  width: 95%;
  margin-bottom:20px;
  padding: 0.2rem;
  padding-left: 0.4rem;
  border-radius:5px;
`

const CheckoutPageContainer = styled.div`
  width: 80vw;
  text-align: center;
  margin: auto;
`

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .emptyMessage{
    font-size: 1.3rem;
    margin: 1.5rem;
    color: grey;
  }

  .footer{
    align-self: flex-end;
    padding-right: 1.4rem;
    padding-top: .6rem;
    .subtotal{
      font-size: 1.3rem;
      font-weight: 600;
    }

    .placeOrder{
      padding: .5rem .8rem .5rem .8rem;
      height: 3rem;
      border-radius: .5rem;
      text-align: center;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background-color: #5cd65c;
    }
  }

  .cartItem{
    width: 100%;
    border-bottom: 0.6px solid #DCDCDC;
    padding: .7rem 1.5rem .7rem 1.5rem;
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

const Whisper = styled.p`
  font-size: .8rem;
  font-style: italic;
`

const mapDispatchToProps = dispatch => {
  return {
    SetCart: (data) => dispatch({ type: 'SET_CART', data: data }),
  };
};

export default connect(mapDispatchToProps)(CheckoutPage);