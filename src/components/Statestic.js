import React, { PureComponent } from 'react';
import { Tooltip } from 'react-bootstrap';
import './Blog.css'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
;

const Statestic = () => {



    const data = [
        {
            name: 'React',
            totalQuiz: 8,

        },
        {
            name: 'JavaScript',
            totalQuiz: 9,

        },
        {
            name: 'CSS',
            totalQuiz: 8,

        },
        {
            name: 'Git',
            totalQuiz: 11,

        }
    ];

    return (
        <div className='text-center mt-5 pt-5'>
            <h1 >Stastic About All Topic Qustion</h1>
            <div className='chart-div'>
                <div >
                    <AreaChart width={730} height={250} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="totalQuiz" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    </AreaChart>
                </div>

            </div>
        </div>
    );
};

export default Statestic;