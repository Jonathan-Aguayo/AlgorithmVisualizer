import './Chart.css'
import { Bar } from '@visx/shape';
import React from 'react';
import { Grid } from '@material-ui/core';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear } from '@visx/scale';
import {
  GradientPurpleOrange,
} from '@visx/gradient';

export default function Chart(props) {
  const verticalMargin = 20;
  const xMax = props.width;
  const yMax = 600;
  const randomArray = props.array;

  const xScale = React.useMemo(
    () =>
      scaleBand({
        range: [0, xMax],
        round: true,
        domain: randomArray,
        padding: 0.3,
      }),
    [randomArray, xMax],
  );

  const yScale = React.useMemo(
    () =>
      scaleLinear({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...randomArray)],
      }),
    [randomArray, yMax],
  );

  return (
    <Grid container direction = 'column' justify='center' alignItems='center' style={{display: 'block'}}>
      <Grid item xs = {12} style={{display: 'block'}} id='BarGraphDiv'>
        <svg  viewBox = {`0 0 ${props.width} 600 `}>
          <GradientPurpleOrange id='teal'/>
          <rect x='0' y='0' width={props.width} height={600}  fill='url(#teal)' />
          <Group id='GraphBarGroup' >
            {
              randomArray.map( (d, index) => 
                {
                  const barWidth = xScale.bandwidth();
                  const height = yMax - (yScale(d)) - verticalMargin;
                  const x = xScale(d)
                  const y = yMax -height
                  return(
                      <Bar
                      id = {`GraphBar-${index}`}
                      key={`bar-${index}`}
                      x={x}
                      y={y}
                      width={barWidth}
                      height={height}
                    >
                    </Bar>
                  )
                })
            }
          </Group>
        </svg>
      </Grid>
    </Grid>

  );





}
