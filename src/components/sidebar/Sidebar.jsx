import './Sidebar.scss'

//import Icons
import {DashboardIcon, PeopleIcon,InventoryIcon, BorderIcon, ShippingIcon, StatIcon, NotificationIcon, SystemIcon, MessageIcon, SettingsIcon, PersonAddIcon, SyncIcon, LogoutIcon,RolesIcon, CalendarIcon, InvoiceIcon} from  './../icon/icon';
import {Link} from 'react-router-dom'

import { useContext } from "react";
import { DarkModeContext } from "./../../context/darkModeContext.js";

const Sidebar = () => {

 const {dispatch} =  useContext(DarkModeContext);
  return (
    <div className='sidebar'>
    {/* top logo */}
      <div className='top'>
        <Link to='/' style={{textDecoration:'none'}}>
          <span className='logo'>TcoderAdmin</span>
        </Link>
      </div>
      <hr/>
      {/* center list */}
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
           <Link to='/' style={{textDecoration:'none'}}>
            <li> <DashboardIcon className="icon"/> <span>Dashboard</span></li>
          </Link>
          <p className='title'>LISTS</p>
            <Link to='/users' style={{textDecoration:'none'}}>
                <li> <PeopleIcon className="icon"/> <span>Users</span></li>
            </Link>
            <Link to='/products' style={{textDecoration:'none'}}>
                <li><InventoryIcon className="icon"/> <span>Products</span></li>
              </Link>
              <Link to='/orders' style={{textDecoration:'none'}}>
                <li> <BorderIcon className="icon"/> <span>Orders</span></li>
              </Link>
              <Link to='/delivery' style={{textDecoration:'none'}}>
                <li> <ShippingIcon className="icon"/> <span>Delivery</span></li>
              </Link>
          <p className='title'>USEFUL</p>
             <Link to='/analytics' style={{textDecoration:'none'}}>
               <li> <StatIcon className="icon"/> <span>Analytics</span></li>
             </Link>
              <Link to='/notification' style={{textDecoration:'none'}}>
                <li> <NotificationIcon className="icon"/> <span>Notification</span></li>
              </Link>
              <Link to='/system_health' style={{textDecoration:'none'}}>
                <li> <SystemIcon className="icon"/> <span>System Health</span></li>
              </Link>
              <Link to='/role_permission' style={{textDecoration:'none'}}>
                <li> <RolesIcon className="icon"/> <span>Role & Permission</span></li>
              </Link>
              
          <p className='title'>SERVICE</p>
             <Link to='/message' style={{textDecoration:'none'}}>
              <li> <MessageIcon className="icon"/> <span>Messages</span></li>
            </Link>
            <Link to='/setting' style={{textDecoration:'none'}}>
              <li> <SettingsIcon className="icon"/> <span>Settings</span></li>
            </Link>
          <p className='title'>DETAILS</p>
            <Link to='/calander' style={{textDecoration:'none'}}>
              <li> <CalendarIcon className="icon"/> <span>Calendar</span></li>
            </Link>
            <Link to='/invoice' style={{textDecoration:'none'}}>
              <li> <InvoiceIcon className="icon"/> <span>Invoice</span></li>
            </Link>
            <Link to='/logs' style={{textDecoration:'none'}}>
              <li> <SyncIcon className="icon"/> <span>Logs</span></li>
             </Link>
          <p className='title'>PROFILE</p>
            <Link to='/profile' style={{textDecoration:'none'}}>
              <li> <PersonAddIcon className="icon"/> <span>Profile</span></li>
            </Link>
            <Link to='/logout' style={{textDecoration:'none'}}>
              <li> <LogoutIcon className="icon"/> <span>Logout</span></li>
            </Link>
        </ul>
      </div>
      {/* bottom  */}
      <p className='title'>COLORS</p>
      <div className='bottom'>
        <div className='colorOption' onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className='colorOption' onClick={()=>dispatch({type:"DARK"})}></div>
      </div>

    </div>
  )
}

export default Sidebar;
