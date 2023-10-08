
import React, { useState } from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Search from './Search';

import ListHouses from './ListHouses';



export default function Home(props) {

  const [handlebutton, setbutton]= useState(false)
  const searchButton =()=>{
    setbutton(true)
  }
  return (
    <div>
    <MDBCarousel showIndicators showControls fade  >
      <MDBCarouselItem

        style={{height :"380px", width :"100%"}}
        itemId={1}
        src='https://uploads-ssl.webflow.com/637ac7502ecc7e25ee8a2510/63a0d02da7afea7a71891bc2_landlord-studio-blog-header-3.jpeg'
        alt='...'
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        style={{height :"380px", width :"100%"}}
        itemId={2}
        src='https://image-cdn.carrot.com/uploads/sites/69435/2023/01/hd-wallpaper-g871b7a599_1920-1920x800.jpg'
        alt='...'
      >

      </MDBCarouselItem>

      <MDBCarouselItem
        style={{height :"380px", width :"100%"}}
        itemId={3}
        src='https://www.ledges.com/wp-content/uploads/2023/03/Untitled-design-2023-03-06T104754.770.jpg'
        alt='...'
      >

      </MDBCarouselItem>
    </MDBCarousel>
    <br />

    <h2 style={{color :'#3b71ca' , marginLeft:"15px" }}>Real estate</h2>
    <Search houses={props.houses} getSearched={props.getSearched} searchButton={searchButton} />
    <br/>
    
    <ListHouses  getId={props.getId} getData={props.getData} getImages={props.getImages} searched={props.searched} handlebutton={handlebutton} />
    </div>
  );
}