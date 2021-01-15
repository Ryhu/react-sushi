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
  background-image: url("./wax_wood.jpg");
  border-radius: 7px;
  background-size: cover;
  box-shadow: 6px 5px 5px #111111;
  margin-top: 4rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  .categoryTitle{
    font-size: 2rem;
    font-weight: bold;
    opacity: .9;
  }
`

export default MenuCategory;