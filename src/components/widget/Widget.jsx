import {KeyUpIcon,AccountIcon,SurroundIcon,DeliveryIcon,CastIcon,InventoryIcon,ShippingIcon,BorderIcon} from './../icon/icon';
import './Widget.scss'


const Widget = ({type}) => {
  let data;
  // temporary money
  let perc = 20;
  switch(type){
    case "user":
      data= {
        title:'USERS',
        isMoney:false,
        amount:1345,
        link:'see all users',
        background:'#24e2eb',
        icons:<AccountIcon className='icon'/>, 
     
      }
      break;
      case "product":
      data= {
        title:'PRODUCTS',
        isMoney:false,
        amount:2000,
        link:'see all products',
        background:'#75baef',
        icons:<InventoryIcon className='icon'  
        />, 
      }
      break;
      case "order":
      data= {
        title:'ORDERS',
        isMoney:false,
        amount:1000,
        link:'see all orders',
        background:'#4ba8f4',
        icons:<BorderIcon className='icon'/>, 
      }
      break;
      case "earning":
      data= {
        title:'EARNINGS',
        isMoney:true,
        amount:2000,
        link:'see all earning',
        background:'#bc75f0',
        icons:<CastIcon className='icon'/>, 
      }
      break;
      case "balance":
      data= {
        title:'BALANCES',
        isMoney:true,
        amount:45234,
        link:'see all balances',
        background:'#f075da',
        icons: <ShippingIcon className='icon'/>, 
      }
      break;
       case "delivery":
      data= {
        title:'DELIVERY',
        isMoney:false,
        amount:45234,
        link:'see all delivery',
        background:'#57bb4b',
        icons:<DeliveryIcon className='icon'/>, 
      }
      break;
         case "system":
      data= {
        title:'SYSTEM',
        isMoney:false,
        amount:34,
        link:'see all system status',
        background:'#d67c38',
        icons:<SurroundIcon className='icon' />, 
      }
      break;
      
      default:
        break;
  }
  return (
    <div className='widget' style={{backgroundColor:data.background}}>
        <div className='left'>
          <span className='title'>{data.title}</span>
          <span className='counter'>{data.isMoney && "ETB"} {data.amount}</span>
          <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
          <div className='percentage positive'>
           <KeyUpIcon/>
             {perc}%
          </div>
          {data.icons}
        </div> 
    </div>
  )
}

export default Widget