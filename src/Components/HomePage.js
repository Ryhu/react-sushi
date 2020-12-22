import React from 'react';
import styled from 'styled-components'


function HomePage() {
  return (
    <HomePageContainer>
      <Landing>
        <img className="backgroundImage" src="http://hanaportwashington.com/images/intro-bg.jpg"></img>
        <div className="logobox">
          <img className="logo" src="http://hanaportwashington.com/images/logo.png" width="120" height="62"></img>
        </div>
      </Landing>
      {/* <Alert>

      </Alert> */}
      <About>
        <div className="textBox">
          <h3>
          Dear valued customers,
          </h3>
          We are pleased to announce the opening of Hana conveniently located here at Long Island. We have been serving traditional Japanese cuisine since 1999 in New York City. We stay true to the fundamentals and take great pride in serving the freshest fish daily. Many of our fish are shipped from a range of places including the renowned ‘Tsukiji Market’ and ‘The New Fulton Fish Market’. Our organic produces are supplied by local farmers’ markets. At Hana, we proudly present a unique dine-in experience, the Omakase* (o – ma – ka – se). In order to enjoy a traditional sushi mean in the most relaxing and satisfying way, we recommend sitting at our sushi bar fully accustomed with a variety of preferences. You will be able to enjoy unique pieces of sushi that are diligently prepared by our experienced chefs. Our chefs ensure each piece is served at the perfect time and temperature. We are looking forward in serving you.
          <br></br>
          <br></br>
          Sincerely,
          <br></br>
          Hana Team
        </div>
        <img src="http://hanaportwashington.com/images/overview-img.jpg"></img>
      </About>
      <Pictures>
        <img className="backgroundImage" src="http://hanaportwashington.com/images/bg.jpg"></img>
        <img className="galleryImage" src="http://hanaportwashington.com/images/p1.jpg"></img>
        <img className="galleryImage" src="http://hanaportwashington.com/images/p2.jpg"></img>

      </Pictures>


    </HomePageContainer>
  );
}

const HomePageContainer = styled.div`
`

const Alert = styled.div`
  background-color: yellow;
  height: 30vh;
  width: 100vw;
`

const Pictures = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 50vh;
  .backgroundImage{
    z-index: 0;
    position: absolute;
    object-fit: cover;
    height: 50vh;
    width: 100vw;
  }

  .galleryImage{
    z-index: 1;
    object-fit: contain;
  }
`

const About = styled.div`
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: white;
  align-items: center;
  height: 70vh;
  width: 100vw;

  .textBox{
    width: 40vw;
    text-align: left;
  }

  img{
    object-fit: contain;
    width: 40vw;
  }
`

const Landing = styled.div`
position: relative;
  height: 100vh;
  width: 100vw;
  .backgroundImage{
    z-index: 0;
    right: 0;
    position: absolute;
    margin-top: -10vh;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
  .logobox{
    position: relative;
    width: 20rem;
    top: calc(50vh - 10rem);
    right: calc(-50vw - (50vw - 20rem) / 2);
    .logo{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`


export default HomePage;