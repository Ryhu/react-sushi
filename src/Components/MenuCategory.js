import React from 'react';
import styled from 'styled-components'
import ItemTile from './ItemTile'

function MenuCategory(props) {
  // data = [{menuitems}]
  // name = string


  return (
    <div id={"menuCategory" + props.name}>
      <MenuCategoryContainer>
        <p className="categoryTitle" >{props.name}</p>
        { (props.data.map(menuItem => {
              return <ItemTile 
                        name={menuItem.attributes.name} 
                        description={menuItem.attributes.description} 
                        price={menuItem.attributes.price}
                        key={menuItem.attributes.id}>
                      </ItemTile>
        })) }
      </MenuCategoryContainer>
    </div>
  );
}

const MenuCategoryContainer = styled.div`
  .categoryTitle{
    font-size: 2rem;
    font-weight: bold;
  }
`


export default MenuCategory;