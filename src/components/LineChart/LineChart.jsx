
import {LineChart, Legend, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import './LineChart.scss'
import  data from './../../assets/files/ChartData.jsx';

const LineCharts = () => {
  return (
      <div className="lineChartContainer">
        <ResponsiveContainer>
          <LineChart data={data} className="lineChart" width={600} height={300}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <Line type="monotone" dataKey="earning" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
    </div> 
  )
}
export default LineCharts;