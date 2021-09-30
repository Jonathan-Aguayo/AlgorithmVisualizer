import './Chart.css'
import { Bar } from '@visx/shape';
import React from 'react';
import { Grid } from '@material-ui/core';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear, scaleOrdinal} from '@visx/scale';
import { GradientPurpleOrange,} from '@visx/gradient';
import {
  LegendOrdinal,
  LegendItem,
  LegendLabel,
} from '@visx/legend';
import ParentSize from '@visx/responsive/lib/components/ParentSize';


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

  const legendGlyphSize = 15;
  const legendScale = scaleOrdinal(
    {
      domain: ['Compared', 'Pivot'],
      range: ['green','red']
    })

  return (
    <Grid container direction = 'column' justify='center' alignItems='center' style={{display: 'block'}} id='Graph'>
      <Grid item xs = {12} style={{display: 'block'}} id='BarGraphDiv'>
        <svg preserveAspectRatio viewBox = {`0 0 ${props.width} 600 `}>
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
      <Grid item container xs={12} justify='center'>
        <LegendOrdinal scale={legendScale} labelFormat = {label => `${label}`}>
          {labels => (
            <div style={{ display: 'flex', flexDirection: 'row' }} id = 'legend'>
              {labels.map((label, i) => (
                <LegendItem
                  key={`legend-quantile-${i}`}
                  margin="0 5px"
                >
                  <svg width={legendGlyphSize} height={legendGlyphSize}>
                    <rect fill={label.value} width={legendGlyphSize} height={legendGlyphSize} />
                  </svg>
                  <LegendLabel align="left" margin="0 0 0 4px">
                    {label.text}
                  </LegendLabel>
                </LegendItem>
              ))}
            </div>
          )}
        </LegendOrdinal>
      </Grid>
    </Grid>

  );





}
