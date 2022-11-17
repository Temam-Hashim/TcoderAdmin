import React, { useState } from 'react';
import './New.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { Button } from '@mui/material';

const New = ({inputs, title}) => {
    const [file, setFile] = useState("");
    const imgUrl = file ? URL.createObjectURL(file) : require("./../../assets/img/no_image2.png");
  return (
   <div className='new'>
      <Sidebar/>
      <div className='newContainer'>
        <Navbar/>
         <div className='top'>
         <h2 className='infoTitle'>{title}</h2>
            
         </div>
         <div className='bottom'>
            <div className='left'>
              <label htmlFor='file'>
                <img  className='image' src={imgUrl} />
              </label>
              <h4 style={{color:'lightgray',margin:'10px'}}>Select Image</h4>
            </div>
            <div className='right'>
               <form>
                  <input type='file' accept="image/*" id='file' onChange={e=>setFile(e.target.files[0])} style={{display:'none'}}/>
                  {inputs.map((row)=>(

                      <div className="formInput" key={row.id}>
                        <label>{row.label}</label>
                        <input type={row.type} placeholder={row.placeholder}/>
                      </div>
                  ))} 

                      <Button variant='contained' className='submitBtn' size='small'>SUBMIT</Button>
                 </form>
            </div>
         </div>
      </div>
    </div>
  )
}

export default New