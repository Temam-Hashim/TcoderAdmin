
import './List.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DataTable from '../../components/tables/DataTable';


const List = ({tableRow,tableColumn}) => {
  return (
    <div className='lists'>
      <Sidebar/>
       <div className='listContainer'>
          <Navbar/>
          <div className='datatables'>
            <DataTable tableRow={tableRow} tableColumn={tableColumn}/>
          </div>
       </div>
    </div>
  )
}

export default List