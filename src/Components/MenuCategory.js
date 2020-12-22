import React from 'react';
import styled from 'styled-components'
import ItemTile from './ItemTile'

function MenuCategory(props) {
  // data = [{menuitems}]
  // name = string

  return (
    <MenuCategoryContainer id={"menuCategory" + props.name}>
      <p className="categoryTitle" >{props.name}</p>
      { (props.data.map(menuItem => {
            return <ItemTile 
                      data={menuItem}
                      key={menuItem.attributes.id}
                      setItemModalData={props.setItemModalData}>
                    </ItemTile>
      })) }
    </MenuCategoryContainer>
  );
}

const MenuCategoryContainer = styled.div`
  background-image: url("./wood2.1.jpg");
  margin-top: 3rem;
  .categoryTitle{
    font-size: 2rem;
    font-weight: bold;
    color: white;
  }
  .categoryTitle::before { 
    display: block; 
    content: " "; 
    margin-top: -5.5rem; 
    height: 5.5rem; 
    visibility: hidden; 
    pointer-events: none;
  }
`

export default MenuCategory;