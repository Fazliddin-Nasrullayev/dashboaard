import React from 'react'; 
import Form from 'react-bootstrap/Form'; 
import { XAxis, CartesianGrid, Tooltip, AreaChart, Area } from 'recharts'
import './Chart.css'

 
const Chart = () => {
const data = [
    { name: "Jan", Total: 1200 },
    { name: "Feb", Total: 2100 },
    { name: "Mar", Total: 800 },
    { name: "Apr", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "Jun", Total: 1700 },
    { name: "Jul", Total: 1200 },
    { name: "Aug", Total: 2100 },
    { name: "Sep", Total: 800 },
    { name: "Oct", Total: 1600 },
    { name: "Now", Total: 900 },
    { name: "Dec", Total: 1700 }
];

 
  
    return (
            <>
        <div className="chart">
            <div className="chart__title">
                <h3 className='chart__text'>Yillik Statistika</h3>
            <Form.Select className='chart_select'>
              <option>Yillar</option>
              <option value="1">2022</option>
              <option value="2">2021</option>
              <option value="3">2020</option>
            </Form.Select>
            </div>

            <div>
            </div>


                <AreaChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                <defs>
                    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8484d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8484d8" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="  " />
                <CartesianGrid strokeDasharray="3 3" className="chart__grid" />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="Total"
                    stroke="#8484d8"
                    fillOpacity={1}
                    fill="url(#total)"
                    />
                </AreaChart>
                </div>
                    </>
    );
};

export default Chart;