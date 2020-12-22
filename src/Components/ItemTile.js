import React from 'react';
import styled from 'styled-components'


function ItemTile(props) {

  return (
    <ItemTileContainer onClick={() => props.setItemModalData(props.data)}>
      <div className="container">
        <div>
          <p className="text bold" >{ props.data.attributes.name }</p>
          <p className="text" >{ props.data.attributes.description }</p>
        </div>
        <p className="text bold" >{ '$' + props.data.attributes.price.toFixed(2) }</p>
      </div>
    </ItemTileContainer>
  );
}

const ItemTileContainer = styled.div`
  display: inline-block;
  margin: 1rem;
  
  .container {
    box-shadow: 6px 5px 5px #111111;
    border-radius: 7px;
    background-image: url("./wood2.1.jpg");
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 23rem;
    border: 0.6px solid black;
    text-align: left;
    vertical-align: top;
    box-sizing: border-box;

    .text {
      color: #black;
      text-shadow: 0px 1px 0px rgba(255, 255, 255, .5);
      margin: 1rem;
      font-weight: 500;
    }

    .bold {
      font-weight: 700;
    }
  }
  .container:hover{
    opacity: 0.8;
  }
`


export default ItemTile;