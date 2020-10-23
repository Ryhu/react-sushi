import React from 'react';
import styled from 'styled-components'


function ItemTile(props) {

  return (
    <ItemTileContainer>
      <p className="text" >{ props.name }</p>
      <p className="text" >{ props.description }</p>
      <p className="text" >{ '$' + props.price }</p>
    </ItemTileContainer>
  );
}

const ItemTileContainer = styled.div`
  background-color: red;
  padding: .5rem;
  color: white;
  height: 7rem;
  width: 23rem;
  border: 0.6px solid black;
  display: inline-block;
  text-align: left;
  vertical-align: top;

  .text {
    margin: 0.5rem;
  }
`


export default ItemTile;