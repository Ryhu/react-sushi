import React from 'react';
import styled from 'styled-components'


function HomePage() {
  return (
    <HomePageContainer>
      <Body>
        sushi pictures and sushi words go here
      </Body>
    </HomePageContainer>
  );
}

const HomePageContainer = styled.div`
`

const Body = styled.div`
  width: 80vw;
  text-align: center;
  margin: auto;
`


export default HomePage;