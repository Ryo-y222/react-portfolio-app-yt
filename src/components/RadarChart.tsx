import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface SkillProps  {
  options: any;
  data: any;
}


const RadarChart: React.FC<SkillProps> = ({options, data}) => {
    return(
        <>
          <Radar options={options} data={data} />
        </>
    )
}

export default RadarChart;
