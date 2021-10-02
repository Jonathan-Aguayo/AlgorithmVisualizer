import './Chart.css'
import { Bar } from '@visx/shape';
import React from 'react';
import { Grid } from '@material-ui/core';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear, scaleOrdinal} from '@visx/scale';
import { GradientPurpleOrange, RadialGradient} from '@visx/gradient';
import {
  LegendOrdinal,
  LegendItem,
  LegendLabel,
} from '@visx/legend';

export default function Chart(props) {
  const verticalMargin = 20;
  const xMax = props.width;
  const yMax = props.height;
  const randomArray = props.array;

  const xScale = React.useMemo(
    () =>
      scaleBand({
        range: [10, xMax-10],
        domain: randomArray,
        padding: 0.15,
      }),
    [randomArray, xMax],
  );

  const yScale = React.useMemo(
    () =>
      scaleLinear({
        range: [yMax, 0],
        domain: [0, Math.max(...randomArray)],
      }),
    [randomArray, yMax],
  );

  // eslint-disable-next-line no-lone-blocks
  {/* const legendGlyphSize = 15;
  const legendScale = scaleOrdinal(
    {
      domain: ['Compared', 'Pivot'],
      range: ['green','red']
    }) */}

  return (
    <Grid container direction = 'column' justify='center' alignItems='center' style={{display: 'block'}} id='Graph'>
      <Grid item xs = {12} style={{display: 'block'}} id='BarGraphDiv'>
        <svg preserveAspectRatio viewBox = {`0 0 ${props.width} ${props.height} `}>
          <RadialGradient id='teal' from='#62a6bf' to='#2a4f5c' r='75%' />
          <rect x='0' y='0' width={props.width} height={props.height}  fill='url(#teal)' />
          <Group id='GraphBarGroup'>
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
      {/*
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
              */}
    </Grid>
  );
}
