import { SearchIcon, LanguageIcon, FullScreenExitIcon,DarkModeIcon,NotificationIcon,ChatIcon,ListIcon} from './../icon/icon';

import './Navbar.scss';
import { useContext } from "react";
import { DarkModeContext } from "./../../context/darkModeContext.js";

const Navbar = () => {
  
 const {dispatch} =  useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder='Search...'/>
            <SearchIcon className='icon'/>
        </div>
        <div className='items'>
        <div className='item'>
            <LanguageIcon className='icon'/>
            English
          </div>
          <div className='item'>
            <FullScreenExitIcon className='icon'/>

          </div>
          <div className='item'>
            <DarkModeIcon className='icon' onClick={()=>dispatch({type:"TOGGLE"})}/>

          </div>
          <div className='item'>
            <NotificationIcon className='icon'/>
            <div class="counter">12</div>
          </div>
          <div className='item'>
            <ChatIcon className='icon'/>
            <div class="counter">5</div>
          </div>
          <div className='item'>
            <ListIcon className='icon'/>
          </div>
          <div className='item'>
            <img className='avatar' alt='avatar' src={require('../../assets/img/user.jpg')} />
          </div>
        </div>
      </div>
     </div>
  )
}

export default Navbar