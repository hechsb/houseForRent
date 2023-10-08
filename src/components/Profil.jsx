import * as React from 'react';

import {Link} from "react-router-dom"



// TODO remove, this demo shouldn't need to reset the theme.


export default function Profil() {


  return (
<div>
<h2 style={{color :'#3b71ca' , margin:"20px" }}>My homes</h2>
<div style={{ display: 'flex', flexWrap: 'wrap' }}> 
<div class="card" style={{ width: '150px', marginTop: '40px' , marginLeft:"20px"}}>
  <Link to="/Addhouse">
  <img src="https://cdn.pixabay.com/photo/2017/03/19/03/51/material-icon-2155448_1280.png" class="card-img-top" alt="Fissure in Sandstone"/>
  </Link>
  <div class="card-body">
  </div>
</div>
</div>
</div>
  );
}