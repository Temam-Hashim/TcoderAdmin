import {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import {Link } from 'react-router-dom';



const DataTable = ({tableRow,tableColumn})=> {
      const  [row,setRow] = useState(tableRow);
      const path = window.location.pathname;
      const handleDelete = (id)=>{
            setRow(row.filter((item)=>item.id !== id));    
      }
  const actionColumn = [
    {
      field:'action',headerName:'Action', width:250,
      renderCell:(params)=>{
        return (
          <div className='cellAction'>
              <Link to={`${path}/${params.row.id}` } style={{textDecoration:"none"}} >
                <Button variant='contained' color="primary" size="small">View</Button>
              </Link>
              <Link to={`${path}/edit/${params.row.id}` } style={{textDecoration:"none"}} >
               <Button variant='contained' color="success" size="small">Edit</Button>
             </Link>
              <Button variant='contained' color="error" size="small"  onClick={()=>handleDelete(params.row.id)}>Delete</Button>
          </div>
        )
      }
    }
  ]

  return (
      <div className='datatable'>
        <div className="dataTableTitle">
          <h2 className="title">Add new {path.substring(1,)}</h2>
          <Link to={`${path}/new`} style={{textDecoration:"none"}} >
            <Button variant='contained' size="medium" style={{color:"cyan"}}>Add New</Button>
          </Link>
        </div>
         <DataGrid className="dataTableColumn"
            rows={tableRow}
            columns={tableColumn.concat(actionColumn)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
      </div>
  );
}

export default DataTable
