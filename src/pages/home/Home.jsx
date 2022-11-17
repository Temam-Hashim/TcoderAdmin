import {React} from 'react'
import './Home.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widgets from '../../components/widget/Widget';
import FeaturedChart from '../../components/featured/Featured';
import AreaCharts from '../../components/chart/AreaChart';
import BasicTable from '../../components/tables/BasicTable';
import BarCharts from '../../components/BarChart/BarCharts';
import LineCharts from '../../components/LineChart/LineChart';
import { Link } from 'react-router-dom';


const Home = () => {

return (
    <div className='home'>
    {/* sidebar */}
        <Sidebar/>
      <div className='homeContainer'>
          {/* navbar */}
        <Navbar/>
           {/* home widgets */}
        <div className='widgets'>
          <Link to={`users`} style={{textDecoration:"none"}} >
            <Widgets type='user'/>
          </Link>
          <Link to={`products`} style={{textDecoration:"none"}} >
            <Widgets type='product'/>
          </Link>
          <Link to={`orders`} style={{textDecoration:"none"}} >
            <Widgets type='order'/>
          </Link>
          <Link to={`earnings`} style={{textDecoration:"none"}} >
            <Widgets type='earning'/>
          </Link>
          <Link to={`delivery`} style={{textDecoration:"none"}} >
            <Widgets type='delivery'/>
          </Link>
          <Link to={`system`} style={{textDecoration:"none"}} >
            <Widgets type='system'/>
          </Link>
        </div>
        {/* progress andd area charts */}
        <div className='charts1'>
          <FeaturedChart/>
          <AreaCharts  aspect={2 / 1}/>
        </div>
        {/* bar and line charts */}
        <div className='charts2'>
           <BarCharts/>
           <LineCharts/>
          {/* <BarCharts/> */}
        
        </div>
        {/* data tables */}

        <div className='listContainer'>
          <div className='tables'>
             <BasicTable/>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home;