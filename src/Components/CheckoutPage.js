import React from 'react';
import styled from 'styled-components'


function CheckoutPage() {
  return (
    <CheckoutPageContainer>
      <Body>

        checkout
        <Whisper>
              (Which also goes to my email. All roads lead to my email.) 
            </Whisper>
        <LineInput
          type='text'
          name="name"
          autocomplete="name"
          placeholder="Name"
        />
                <LineInput
          type='text'
          name="email"
          autocomplete="email"
          placeholder="Email"
        />
                <LineInput
          type='text'
          name="number"
          autocomplete="number"
          placeholder="Phone"
        />
                <LineInput
          type='text'
          name="address"
          autocomplete="address"
          placeholder="Address"
        />
      </Body>
    </CheckoutPageContainer>
  );
}

//name, email, number, address
// payment

const CheckoutPageContainer = styled.div`
`

const Body = styled.div`
  width: 80vw;
  text-align: center;
  margin: auto;
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


export default CheckoutPage;