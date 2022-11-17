import { KeyUpIcon, KeyDownIcon, ProgressIcon, MoreIcon, } from "../icon/icon"
import  "react-circular-progressbar/dist/styles.css"
import './Featured.scss'

const Featured = () => {
  return (
    <div className="featured">
      <div className='top'>
        <h1 className='title'>Total Revenue</h1>
        <MoreIcon fontSize='small'/>
      </div>
      <div className='bottom'>
        <div className='featuredChart'>
          <ProgressIcon value={70} text={"70%"} strokeWidth={8}/>
        </div>
        <p className='title'>Total Sales Made Today</p>
        <p className='amount'>ETB 420</p>
        <p className='desc'>Our previous payment has been processed and got deposited</p>
        <div className='summary'>
          <div className='item'>
             <div className='itemTitle'>Target</div>
              <div className='itemResult positive'>
                <KeyUpIcon/>
                <div className='resultAmount '>ETB201.4K</div>
              </div>
          </div>
          <div className='item'>
             <div className='itemTitle'>Last Week</div>
              <div className='itemResult negative'>
                <KeyDownIcon/>
                <div className='resultAmount'>ETB118.1K</div>
              </div>
          </div>
          <div className='item'>
             <div className='itemTitle'>Last Month</div>
              <div className='itemResult positive'>
                <KeyUpIcon/>
                <div className='resultAmount'>ETB150.3K</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured