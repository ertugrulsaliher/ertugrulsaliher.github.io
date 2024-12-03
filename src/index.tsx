import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './util/ER_Software_Solutions.png';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<div style={{display:'flex', justifyContent:'center', alignItems:'center',height:'100vh'}}>
  <a href='https://github.com/ertugrulsaliher' target='_blank' rel='noopener noreferrer'>
    <img src={logo} alt="" style={{maxWidth:'300px', borderRadius:'50px', maxHeight:'300px', cursor:'pointer'}}  />
  </a>
  
</div>  
);


