 export const productRows = [
    {
      id:111,
      product: 'Mobile Phone',
      customer:'Temam Hashim',
      img:require('./../../assets/img/mobile.jpeg'),
      date:'1 March 2022',
      amount:2000,
      method:'Card',
      status:'Approved',
    },
    {
      id:112,
      product: 'Television',
      customer:'Kemal Beraka',
      img:require('./../../assets/img/tv.jpeg'),
      date:'12 April 2021',
      amount:3000,
      method:'Cash on Delivery',
      status:'Pending',
    },
    {
      id:113,
      product: 'Laptop',
      customer:'Selam Zegaye',
      img:require('./../../assets/img/laptop.jpeg'),
      date:'3 January 2020',
      amount:4000,
      method:'Card',
      status:'Approved',
    },
    {
      id:114,
      product: 'Printer',
      customer:'John Joy',
      img:require('./../../assets/img/printer.jpeg'),
      date:'5 July 2022',
      amount:1000,
      method:'Cash On Delivery',
      status:'Pending',
    },
   {
      id:115,
      product: 'Scanner',
      customer:'Carra Waltaji',
      img:require('./../../assets/img/scanner.jpeg'),
      date:'20 June 2019',
      amount:1000,
      method:'Card',
      status:'Approved',
    },
    {
      id:116,
      product: 'Tablets',
      customer:'Biniyam F/Mariam',
      img:require('./../../assets/img/tablet.jpeg'),
      date:'10 August 2020',
      amount:2000,
      method:'Paypal',
      status:'Approved',
    },
    {
      id:117,
      product: 'Desktop',
      customer:'Chala Megarssa',
      img:require('./../../assets/img/desktop.jpeg'),
      date:'10 December 2021',
      amount:700,
      method:'Paytm',
      status:'Pending',
    },
    {
      id:118,
      product: 'Smart Watches',
      customer:'Baharudin Mohammed',
      img:require('./../../assets/img/watch.jpeg'),
      date:'11 February 2020',
      amount:800,
      method:'Card',
      status:'Pending',
    },
    {
      id:119,
      product: 'Monitor',
      customer:'Gamee Gamee',
      img:require('./../../assets/img/monitor.jpeg'),
      date:'12 May 2020',
      amount:500,
      method:'Paypal',
      status:'Pending',
    },
     {
      id:120,
      product: 'Camera',
      customer:'Messay Tefara',
      img:require('./../../assets/img/camera.jpeg'),
      date:'10 December 2021',
      amount:200,
      method:'Cash On Delivery',
      status:'Approved',
    },
     {
      id:121,
      product: 'Radio',
      customer:'Kuku Kuku',
      img:require('./../../assets/img/radio.jpeg'),
      date:'15 June 2021',
      amount:150,
      method:'Card',
      status:'Pending',
    }
  ];

  // users
  export const userRows = [
      {
        id:0,
        firstName: 'Temam',
        lastName:'Hashim',
        mobile:'+25192345672819',
        email:'temam@gmail.com',
        userImg:require('./../../assets/img/user.jpg'),
        age:25,
        gender:'Male',
        status:'Active',
      },
      {
        id:1,
        firstName: 'Selam',
        lastName:'Tesfaye',
        mobile:'+2519567456283',
        email:'selam@gmail.com',
        userImg:require('./../../assets/img/user2.jpg'),
        age:20,
        gender:'Female',
        status:'Pending',
    },
      {
        id:2,
        firstName: 'Kale',
        lastName:'Zagaye',
        mobile:'+251945673234',
        email:'kale@gmail.com',
        userImg:require('./../../assets/img/user.jpg'),
        age:25,
        gender:'Female',
        status:'Passive',
      },
       {
        id:3,
        firstName: 'Kemal',
        lastName:'Beraka',
        mobile:'+25192345672819',
        email:'kemal@gmail.com',
        userImg:require('./../../assets/img/user2.jpg'),
        age:25,
        gender:'Male',
        status:'Pending',
    },
    {
        id:4,
        firstName: 'Mome',
        lastName:'Arabu',
        mobile:'+25198678364753',
        email:'mome@gmail.com',
        userImg:require('./../../assets/img/user.jpg'),
        age:60,
        gender:'Male',
        status:'Passive',
    },
      {
        id:5,
        firstName: 'Bahar',
        lastName:'Mohammed',
        mobile:'+25199087674567',
        email:'behar@gmail.com',
        userImg:require('./../../assets/img/user2.jpg'),
        age:45,
        gender:'Male',
        status:'Active',
    },
      {
        id:6,
        firstName: 'Embet',
        lastName:'Tefara',
        mobile:'+25191234123456',
        email:'embet@gmail.com',
        userImg:require('./../../assets/img/user.jpg'),
        age:24,
        gender:'Female',
        status:'Pending',
    },
      {
        id:7,
        firstName: 'Sara',
        lastName:'Abreham',
        mobile:'+251916798232',
        email:'sara@gmail.com',
        userImg:require('./../../assets/img/user2.jpg'),
        age:30,
        gender:'Female',
        status:'Active',
    },
      {
        id:8,
        firstName: 'Abhya',
        lastName:'Kumar',
        mobile:'+2519156742232',
        email:'abhya@gmail.com',
        userImg:require('./../../assets/img/user.jpg'),
        age:24,
        gender:'Male',
        status:'Passive',
    },
      {
        id:9,
        firstName: 'Amma',
        lastName:'Mak',
        mobile:'+2519785673492',
        email:'amma@gmail.com',
        userImg:require('./../../assets/img/user2.jpg'),
        age:26,
        gender:'Female',
        status:'Active',
    },
      {
        id:10,
        firstName: 'Mustefa',
        lastName:'Abdella',
        mobile:'+2519128876534',
        email:'mustefa@gmail.com',
        userImg:require('./../../assets/img/user2.jpg'),
        age:26,
        gender:'Male',
        status:'Passive',
    },
      {
        id:11,
        firstName: 'Kedir',
        lastName:'Goboze',
        mobile:'+25198976543271',
        email:'kedir@gmail.com',
        userImg:require('./../../assets/img/user.jpg'),
        age:25,
        gender:'Male',
        status:'Active',
    }]

  export const userColumns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'fullName', headerName: 'Full Name', type: 'string', width: 220,
      renderCell: (params)=>{
        return (
          <div className='productCell'>
          <img className='image' src={params.row.userImg}/>
            {params.row.firstName+' '+params.row.lastName}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email', type: 'string', width: 200 },
    {field: 'mobile',headerName: 'Mobile',type: 'string', width: 200},
    {field: 'age',headerName: 'Age',width: 70},
    {field: 'gender',headerName: 'Gender',type: 'string', width: 80},
    {field: 'status',headerName: 'Status',type: 'string',width: 100,
      renderCell:(params)=>{
        return (
          <div className={`status ${params.row.status}`}>
            {params.row.status}
          </div>
        )
      }
      // valueGetter: (params) =>`${params.row.status || ''} ${params.row.status || ''}`,
    },
  ];

  // product column
   export const productColumns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'product', headerName: 'Product Name', type: 'string', width: 220,
      renderCell: (params)=>{
        return (
          <div className='productCell'>
          <img className='image' src={params.row.img}/>
            {params.row.product}
          </div>
        )
      }
    },
    { field: 'customer', headerName: 'Customer', type: 'string', width: 200 },
    {field: 'date',headerName: 'Date',type: 'string', width: 200},
    {field: 'amount',headerName: 'Amount',width: 70},
    {field: 'method',headerName: 'Method',type: 'string', width: 80},
    {field: 'status',headerName: 'Status',type: 'string',width: 100,
      renderCell:(params)=>{
        return (
          <div className={`status ${params.row.status}`}>
            {params.row.status}
          </div>
        )
      }
      // valueGetter: (params) =>`${params.row.status || ''} ${params.row.status || ''}`,
    },
  ];

