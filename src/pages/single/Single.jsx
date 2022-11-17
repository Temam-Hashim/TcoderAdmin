import * as React from 'react';
import './Single.scss'
import Sidebar from './../../components/sidebar/Sidebar';
import Navbar from './../../components/navbar/Navbar';
import AreaCharts from '../../components/chart/AreaChart';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Gallery from '../../components/gallery/Gallery';
import BasicTable from './../../components/tables/BasicTable';

import { userRows } from '../../components/tables/TableRow';
import { productRows } from '../../components/tables/TableRow';

const Single = () => {
var urlParts = window.location.href.split(/\//)
//window.location.href = http://domain.com/category/1
// urlParts = ['http:', '', 'domain.com', 'category', '1']
var path = urlParts.pop();

   function GetUser() {
        for (var i = 0; i < userRows.length; i++) {
            if (userRows[i].id == path) {
                return(userRows[i]);
            }
        }
    }

    function GetProduct() {
        for (var i = 0; i < productRows.length; i++) {
            if (productRows[i].id == path) {
                return(productRows[i]);
            }
        }
    }

    const currentPage = window.location.pathname;
    // console.log(currentPage);
    // console.log(`users/${path}`);

    if(currentPage==`/products/${path}`){
         return (
          <div className='single'>
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>
        
         <div className='top'>
            <div className='left'>
              <h2 className='infoTitle'>PRODUCT INFORMATION</h2>
              <Button variant="contained" className='editBtn'>Edit</Button>
              <div class='item'>
                                            {/* image and upload image button */}
                <div className='imgContainer'>
                  <img
                    src={GetProduct().img}
                    alt='product'
                    className='itemImg'
                  />
                  <div className='uploadBtn'>
                      <Button variant="contained" component="label" size="small">
                        Upload
                        <input hidden accept="image/*" multiple type="file" />
                      </Button>
                      <IconButton color="primary" aria-label="upload picture"  component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera />
                      </IconButton>
                    </div>
                </div>


                  {/* details */}
                <div className='details'>
                  <h2 className='itemTitle'>{GetProduct().customer}</h2>
                  <div className='detailItem'>
                    <span className='itemKey'>Product:</span>
                    <span className='itemValue'>{GetProduct().product}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Amount:</span>
                    <span className='itemValue'>{GetProduct().amount}</span>
                  </div>
                   <div className='detailItem'>
                    <span className='itemKey'>Date:</span>
                    <span className='itemValue'>{GetProduct().date}</span>
                  </div>
                   <div className='detailItem'>
                    <span className='itemKey'>Method:</span>
                    <span className='itemValue'>{GetProduct().method}</span>
                  </div>
                   <div className='detailItem'>
                    <span className='itemKey'>Status:</span>
                    <span className='itemValue'>{GetProduct().status}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='right'>
                <AreaCharts  aspect={3 / 1} />
            </div>
         </div>
         <div className='bottom'>
         {/* table */}
         <BasicTable/>
          {/* gallery */}
          <Gallery/>
         </div>
      </div>
    </div>
    
        
         )
    }else{

  return (
    
    <div className='single'>
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>
        
         <div className='top'>
            <div className='left'>
              <h2 className='infoTitle'>USER INFORMATION</h2>
              <Button variant="contained" className='editBtn'>Edit</Button>
              <div class='item'>
                                            {/* image and upload image button */}
                <div className='imgContainer'>
                  <img
                    src={GetUser().userImg}
                    alt='user'
                    className='itemImg'
                  />
                  <div className='uploadBtn'>
                      <Button variant="contained" component="label" size="small">
                        Upload
                        <input hidden accept="image/*" multiple type="file" />
                      </Button>
                      <IconButton color="primary" aria-label="upload picture"  component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera />
                      </IconButton>
                    </div>
                </div>


                  {/* details */}
                <div className='details'>
                  <h2 className='itemTitle'>{GetUser().firstName+' '+GetUser().lastName}</h2>
                  <div className='detailItem'>
                    <span className='itemKey'>Email:</span>
                    <span className='itemValue'>{GetUser().email}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Mobile:</span>
                    <span className='itemValue'>{GetUser().mobile}</span>
                  </div>
                   <div className='detailItem'>
                    <span className='itemKey'>Gender:</span>
                    <span className='itemValue'>{GetUser().gender}</span>
                  </div>
                   <div className='detailItem'>
                    <span className='itemKey'>Age:</span>
                    <span className='itemValue'>{GetUser().age}</span>
                  </div>
                   <div className='detailItem'>
                    <span className='itemKey'>Status:</span>
                    <span className='itemValue'>{GetUser().status}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='right'>
                <AreaCharts  aspect={3 / 1} />
            </div>
         </div>
         <div className='bottom'>
         {/* table */}
         <BasicTable/>
          {/* gallery */}
          <Gallery/>
         </div>
      </div>
    </div>
    
  )
}
}
export default Single;