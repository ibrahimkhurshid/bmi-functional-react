import React, { useState } from 'react';
import './AreaChart.css';

import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(...registerables);


function AreaChart(props) {

    const{labelsVal,dataVal}=props;
    // const [data,setData]=useState([1,1,1,1])

    return(
        <div className='chart-container'>
        <Line
          data={{
            labels: labelsVal,
            datasets: [
              {
                label: `Body Mass Index`,
                fill:true,
                lineTension:0.3,
                borderWidth: 2,
                borderColor: '#542ea5',
                backgroundColor: 'rgba(205, 197, 255, 0.5)',
                data: dataVal                
              }
          ]}}
          
          options={
          {
            title:{
              display:true,
              text:`Bmi per month`,
              fontSize:20,
            },
            legend:{
              display:true,
              position:'right',
            }
          }}
        />
        </div>
    );
  }

export default AreaChart;