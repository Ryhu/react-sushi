import React from 'react';
import styled from 'styled-components'


function HomePage() {
  return (
    <div className="App">
      <Body>
        hi guys
      </Body>
    </div>
  );
}

const Body = styled.div`
  width: 80vw;
  text-align: center;
  margin: auto;
`


export default HomePage;