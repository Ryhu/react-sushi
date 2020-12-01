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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 23rem;
    border: 0.6px solid black;
    text-align: left;
    vertical-align: top;
    box-sizing: border-box;

    .text {
      margin: 1rem;
    }

    .bold {
      font-weight: bold;
    }
  }
  .container:hover{
    border: 0.6px solid black;
    background-color: #f9f9f9;
  }
`


export default ItemTile;