import React, { useState } from 'react';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom"

export default function Search(props) {
  const [formValue, setFormValue] = useState({
    Nature: '',
    governorate: '',
    city: '',
    type: '',
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  let  searchedData =[]
  const handleSubmit = (e) => {
    e.preventDefault();
      searchedData = props.houses.filter((house) => {
      return (
        (formValue.city === "" || house.Home_City === formValue.city) &&
        (formValue.governorate === "" || house.Home_Governorate === formValue.governorate) &&
        (formValue.Nature === "" || house.Home_Nature === formValue.Nature) &&
        (formValue.type === "" || house.Home_Type === formValue.type)
      );
    });
    props.getSearched(searchedData)
    console.log(searchedData)
  };
  return (
    <MDBValidation className='row g-3' style={{marginLeft:"15px"}} onSubmit={handleSubmit}>
      <MDBValidationItem className='col-md-6' feedback='Please provide a valid city.' invalid  style={{ width: '300px'}}>
        <MDBInput
          value={formValue.city}
          name='city'
          onChange={onChange}
          id='validationCustom03'
          label='City'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-4' style={{ width: '300px' }}>
        <MDBInput
        style={{width : "150px"}}
          value={formValue.governorate}
          name='governorate'
          onChange={onChange}
          id='validationCustom02'
          label='governorate'
        />
      </MDBValidationItem>
      <MDBValidationItem feedback='Please choose a Nature.' invalid className='col-md-4' style={{ width: '300px',  }}>
        
          <MDBInput
            type='text'
            value={formValue.Nature}
            name='Nature'
            onChange={onChange}
            label='Nature'
            className='form-control'
            id='validationCustomUsername'
            placeholder='Nature'
          />
     
      </MDBValidationItem>

      <MDBValidationItem className='col-md-6' feedback='Please provide a valid type.' invalid style={{ width: '300px' }}>
        <MDBInput
          value={formValue.type}
          name='type'
          onChange={onChange}
          id='validationCustom05'
          label='type'
        />
      </MDBValidationItem>

      <div className='col-12'>
       
        <MDBBtn type='submit' onClick={props.searchButton}>Search</MDBBtn>
        
      </div>
    </MDBValidation>
  );
}