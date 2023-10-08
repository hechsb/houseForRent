import axios from "axios";
import React, { useState } from "react";
export default function Addhouse(props) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
  };

  const labelStyle = {
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '5px',
    marginBottom: '10px',
  };

  const submitButtonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
  };

  const submitButtonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const [inputs , setInputs]=useState({})
  console.log(inputs)
  const handleChange =(e)=>{
    const name = e.target.name;
    const value = e.target.value
    setInputs (values =>({...values,[name]:value}))
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3000/api/home/addHouse/1",{
        Home_City :inputs.City,
        Home_Governorate:inputs.governorate,
        Home_Nature: inputs.nature,
        Home_Type: inputs.Type
    }).then((res)=>{
        console.log(res.data)
    }).catch((err)=>{
        console.log(err)
    })

    axios.post(`http://localhost:3000/api/home/addImage/${props.id+1}`,{
        HomeImages_data : inputs.image
    }).then((resp)=>{
        console.log(resp.data)
    }).catch((err)=>{
        console.log(err)
    })
  }


  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <label for="city" style={labelStyle}>
          City:
        </label>
        <input type="text" name="City" id="city" style={inputStyle} required value={inputs.City} onChange={handleChange} />

        <label for="governorate" style={labelStyle}>
          Governorate:
        </label>
        <input type="text" name="governorate" id="governorate" style={inputStyle} value={inputs.governorate} onChange={handleChange} required />

        <label for="nature" style={labelStyle}>
          Nature:
        </label>
        <input type="text" name="nature" id="nature" style={inputStyle} onChange={handleChange} value={inputs.nature} required />

        <label for="type" style={labelStyle}>
          type:
        </label>
        <input type="text" name="Type" id="Type" style={inputStyle} required  onChange={handleChange} value={inputs.Type} />

        <label for="image" style={labelStyle}>
          ImageUrl:
        </label>
        <input type="text" name="image" id="image" accept="image/*" style={inputStyle} onChange={handleChange} value={inputs.image} required />

        <input type="submit" value="Submit" style={submitButtonStyle} />
      </form>
    </div>
  );        
}
