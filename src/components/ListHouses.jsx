import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import {Link, useLocation} from "react-router-dom"
import HouseDetails from './HouseDetails';


export default function ListHouses(props) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchedDataParam = queryParams.get('searchedData');
  const searchedData = searchedDataParam ? JSON.parse(searchedDataParam) : [];

  const [data, setData] = useState([]);

  const [images ,setImages] =useState([])
  const [view , setView]=useState("ListHouses")
console.log(props.handlebutton);


  const getData = () => {
    axios.get("http://localhost:3000/api/home/getAll")
      .then((response) => {
        console.log(response.data)
        setData(response.data);
        props.getData(response.data)
      });
  }
  const getImages =()=>{
   axios.get(`http://localhost:3000/api/home/getImageById`)
      .then((response)=>{
        setImages(response.data)
        props.getImages(response.data)
      
      })
  }
  const getOneImageSrc =(id)=>{
    for(var i=0 ; i<images.length ;i++){
      if(images[i]["Home_Home_id"]===id){
        
        const url =String.fromCharCode(...(images[i]["HomeImages_data"].data))
   
        return url
      }
    }
  }





  useEffect(() => {
    getData();
    getImages();
    // console.log("this is the data " ,data)
    // console.log("this is the images " ,images)
  }, []);
  

  return (
    <div>
      <h2 style={{ color: '#3b71ca', marginLeft: "15px" }}>available real estates</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {!props.handlebutton ? (data.map((house, index) => (
          <MDBCard key={index} style={{ width: '300px', margin: '10px' }}>
            <div>
            <Link to="/houseDetails/"> 
            <MDBCardImage src={getOneImageSrc(house.Home_id)}  alt='...' position='top' onClick={()=>{props.getId(house.Home_id)}}  />
            
            </Link>
            </div>
            <MDBCardBody>
              <MDBCardText>
                {house.Home_City}
                  <br/>                
                {house.Home_Governorate}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        ))) : (props.searched.map((house, index) => (
          <MDBCard key={index} style={{ width: '300px', margin: '10px' }}>
            <div>
            <Link to="/houseDetails/"> 
            <MDBCardImage src={getOneImageSrc(house.Home_id)}  alt='...' position='top' onClick={()=>{props.getId(house.Home_id)}}  />
            
            </Link>
            </div>
            <MDBCardBody>
              <MDBCardText>
                {house.Home_City}
                  <br/>                
                {house.Home_Governorate}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        )))}
      </div>
    </div>
  );
}
