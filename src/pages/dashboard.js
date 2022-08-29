import React from "react"
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer, Label} from 'recharts';

const Dashboard = () => {

    const data = [
        {name: 'Genecis', appname: 400},
        {name: 'NNI', appname: 700},
        {name: 'OOB', appname: 200},
        {name: 'SNAP-API', appname: 1000},
        {name: 'IBN Configurations', appname: 700}
      ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#FF5733'];    
 
    return (
        <div id="dash">
            <br></br>
            <center><h1>Dashboard</h1></center>
        <div className="dashboard" id="dashboard">
        <br></br>
        <div className="pie" id="left">
        <h2>Configurations</h2>
        <ResponsiveContainer width={500} height={500} className="text-center">   
        <PieChart width={400} height={400} title="Config">
            <Legend layout="vertical" verticalAlign="bottom" align="bottom" />
            
          <Pie data={data} dataKey="appname" outerRadius={150}> 
            
          {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))} 
          </Pie>
        </PieChart> 
        </ResponsiveContainer>
        </div>

        <div className="pie2" id="right">
        <center><h2>Self-Help</h2></center>
        <ResponsiveContainer width={500} height={500} className="text-center">   
        <PieChart width={400} height={400} label="Config">
            <Legend layout="vertical" verticalAlign="bottom" align="bottom" />
            
          <Pie data={data} dataKey="appname" outerRadius={150}> 
            
          {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))} 
          </Pie>
        </PieChart> 
        </ResponsiveContainer>
        </div>

        <div className="pie3" id="center">
        <center><h2>Operations</h2></center>
        <ResponsiveContainer width={500} height={500} className="text-center">   
        <PieChart width={400} height={400} label="Config">
            <Legend layout="vertical" verticalAlign="bottom" align="bottom" />
            
          <Pie data={data} dataKey="appname" outerRadius={150}> 
            
          {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))} 
          </Pie>
        </PieChart> 
        </ResponsiveContainer>
        </div>    
        </div>
        </div>

        
      )
    }


export default Dashboard