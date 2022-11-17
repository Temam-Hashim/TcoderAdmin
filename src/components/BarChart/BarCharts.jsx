import './BarCharts.scss'
import { BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid, Tooltip } from 'recharts';
import data from './../../assets/files/ChartData';

const BarCharts = () => {

  return (
    <div className="barChartContainer">
       <BarChart  data={data}  className='barChart' width={480} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" />
        {/* <Bar dataKey="earning" fill="#82ca9d" /> */}
      </BarChart>
    </div>
  )
}

export default BarCharts;