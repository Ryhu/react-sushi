import React from 'react';
import styled from 'styled-components'


function ItemTile(props) {

  return (
    <ItemTileContainer onClick={() => props.setItemModalData(props.data)}>
      <div className="container">
        <div className="textContainer">
          <div>
            <p className="text bold" >{ props.data.attributes.name }</p>
            <p className="text" >{ props.data.attributes.description }</p>
          </div>
          <p className="text bold" >{ '$' + props.data.attributes.price.toFixed(2) }</p>
        </div>
        <div className="waves">
          <img src="waves_right.jpg"></img>

        </div>
      </div>
    </ItemTileContainer>
  );
}

const ItemTileContainer = styled.div`
  display: inline-block;
  margin: 1rem;
  width: 23rem;
  box-sizing: border-box;
  border: 0.6px solid black;
  box-shadow: 3px 3px 3px #111111;
  border-radius: 7px;

  .container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-radius: 7px;
    .waves{
      img{
        height: 8rem;
      }
    }
    .textContainer {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;
      vertical-align: top;
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
  }
  .container:hover{
    opacity: 0.8;
  }
`


export default ItemTile;