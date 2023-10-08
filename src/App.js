import React, { useState } from 'react';
import SignInSide from './components/SignInSide';
import SignUp from './components/SignUp';
import Navbar from './components/NavBar';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Profil from './components/Profil'
import ManageProfil from './components/ManageProfil';
import HouseDetails from './components/HouseDetails';
import ListHouses from './components/ListHouses';
import Addhouse from './components/Addhouse';

function App() {
  const [houseId,setHouseId]=useState(null)
  const [houses, setHouses] = useState([]);
  const [images,setImages]=useState([])
  const [view , setView]=useState(true)
  const [searched , setSearched]=useState([])
  const [userId , setUserId]=useState(null)
  const [id,setLastId]=useState(houses.length)
  console.log("this is ",images)
console.log(houses)
const getLastId =()=>{
  sethouses.lenght
}
const getUserId =(id)=>{
  setUserId(id)
}
  const getId = (id)=>{
    setHouseId(id)
  }
  const getData =(houses)=>{
    setHouses(houses)
  }
const getImages =(images)=>{
  setImages(images)
}
const changeView =(bool)=>{
  setView(bool)
}

const getSearched =(data)=>{
  setSearched(data)
}


  return (

    <div>
    {/* <SignInSide /> */}
     {view===true && <Navbar />}
    <Routes>
        <Route path='/home' element={<Home getId={getId} getData={getData} getImages={getImages} houses={houses} getSearched={getSearched} searched={searched} />} />
        <Route path='/Profil' element={<Profil  />} /> 
        <Route path='/Settings/ManageProfil' element ={ <ManageProfil />} />
        <Route path='/' element={<SignInSide changeView={changeView}  />} />
        <Route path='/signUp' element={<SignUp changeView={changeView}  />} />
        <Route path='/houseDetails/' element={<HouseDetails houseId={houseId} houses={houses} images={images} />} />
        <Route path='/ListHouse' element={<ListHouses getImages={getImages}  getData={getData} houses={houses}  />} />
        <Route path='/Addhouse' element={<Addhouse id={id} />} />
    </Routes>
    </div>  
  );
}

export default App
