
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import './AreaChart.scss'
import  data from './../../assets/files/ChartData.jsx';


const AreaCharts = (aspect) => {
  return (
      <div className="areaChartContainer">
              <ResponsiveContainer aspect= {aspect}>
                <AreaChart data={data} className="areaChart">
                  <defs>
                    <linearGradient id="colorT" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorE" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  {/* <YAxis /> */}
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area type="monotone" dataKey="total"  stroke="#8884d8" fillOpacity={1} fill="url(#colorT)" />
                  <Area type="monotone" dataKey="earning" stroke="#82ca9d" fillOpacity={1} fill="url(#colorE)" />
                </AreaChart>
        </ResponsiveContainer>
    </div> 

  )
}
export default AreaCharts;