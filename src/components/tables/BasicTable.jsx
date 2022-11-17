import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.scss'
import {productRows} from './TableRow';


const BasicTable = () => {

 
  return (
      <TableContainer component={Paper} className="table">
            <h3 className='title'>Transaction Details</h3>
            <Table>
              <TableHead>
                <TableRow className='tableColumn'>
                  <TableCell className='tableCell'>Id</TableCell>
                  <TableCell className='tableCell'>Product</TableCell>
                  <TableCell className='tableCell'>Customer</TableCell>
                  <TableCell className='tableCell'>Amount</TableCell>
                  <TableCell className='tableCell'>Method</TableCell>
                  <TableCell className='tableCell'>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productRows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className='tableCell'>{row.id}</TableCell>
                    <TableCell className='tableCell'>
                      <div className='cellWrapper'>
                          <img src={row.img} alt='product'/>
                           {row.product}
                      </div>
                    </TableCell>
                    <TableCell className='tableCell'>{row.customer}</TableCell>
                    <TableCell className='tableCell'>{row.amount}</TableCell>
                    <TableCell className='tableCell'>{row.method}</TableCell>
                    <TableCell className='tableCell'>
                      <span className={`status ${row.status}` }> {row.status }</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
  )
}

export default BasicTable