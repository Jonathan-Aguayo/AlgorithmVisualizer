import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton';
import {RestartAlt} from '@mui/icons-material'
import {ChangeBarColors, createRandomArray, getQuickSortAnimations, SwapGraphBars} from './HelperFunctions.jsx'

export default function Options(props)
{
    const [bars, setBars] = React.useState(10);
    const [algo, setAlgo] = React.useState('Quick-Sort')
    const [speed, setSpeed] = React.useState(1000)

    const handleBarChange = (event) =>
    {
        setBars(event.target.value);
        props.setArray(createRandomArray(event.target.value,1000,100));
    }

    const handleBarReset = (event) =>
    {
        props.setArray(createRandomArray(bars,1000,100));
    }

    const handleAlgoChange = (event) =>
    {
        setAlgo(event.target.value);
    }

    const handleSpeedChange = (event) =>
    {
        setSpeed(event.target.value);
    }

    function QuickSort(array)
    {
        const [animations,] = getQuickSortAnimations(array)
        let arrayBars = document.getElementsByClassName('visx-bar')
        for(let i = 0; i < animations.length; i++)
        {   
            let indexI = animations[i].swap1;
            let indexJ = animations[i].swap2;
            let pivot = animations[i].pivot;
            //Want to swap at odd numbered indexes like 1, 3, etc
            let swap = (i % 2 === 1);
            if(swap)
            {
                setTimeout(() => 
                {
                    SwapGraphBars(arrayBars,indexI,indexJ);
                    ChangeBarColors(arrayBars,indexI,indexJ,'white')
                    ChangeBarColors(arrayBars,pivot,pivot,'white')
                },i*speed)
            }
            else
            {
                setTimeout(() => 
                {
                    ChangeBarColors(arrayBars,indexI,indexJ,'green')    
                    ChangeBarColors(arrayBars,pivot,pivot,'red')   
                },i*speed)
            }
        }
    }

    function SortArray()
    {
        switch (algo)
        {
            case 'Quick-Sort' :
                QuickSort(props.array);
                break;
            case 'Merge-Sort':
                console.log('merge-sort');
                break;
            case 'Insertion-Sort':
                console.log('merge-sort');
                break;
            default:
                alert('Sorry that is not an algorithm');
        }
    }

    return(
        <Grid container style={{marginTop:'10px', marginBottom:'10px',padding: '5px'}} justifyContent='space-evenly' alignItems='center'>
            <Grid item xs={4} md={2}>
                <FormControl fullWidth>
                    <InputLabel id="Bar-Number-select">Number of bars</InputLabel>
                    <Select
                    labelId="Bar-Number-select-label"
                    id="demo-simple-select"
                    value={bars}
                    label="Number of bars"
                    onChange={handleBarChange}
                    >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={500}>500</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4} md={2}>
                <FormControl fullWidth>
                    <InputLabel id="Algo-select">Sorting Algorithm</InputLabel>
                    <Select
                    labelId="Algo-Select-label"
                    id="Algo-Select"
                    label="Sorting Algorithm"
                    value={algo}
                    onChange = {handleAlgoChange}
                    >
                    <MenuItem value={'Merge-Sort'}>Merge Sort</MenuItem>
                    <MenuItem value={'Insertion-Sort'}>Insertion Sort</MenuItem>
                    <MenuItem value={'Quick-Sort'}>Quick Sort</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={5} md={2}>
                <p>Time between steps (ms)</p>
                <Slider
                    defaultValue={speed}
                    step={100}
                    marks
                    min={10}
                    max={1000}
                    onChange = {handleSpeedChange}
                    valueLabelDisplay="auto"
                />               
            </Grid>
            <Grid item container xs={2} md={1} justifyContent='flex-end'>
                <Button variant='outlined' onClick = {SortArray}> Go</Button>
            </Grid>
            <Grid item container xs={2} md={1} justifyContent='flex-end'>
                <IconButton onClick={handleBarReset}>
                    <RestartAlt fontSize='large'/>
                </IconButton>
            </Grid>
        </Grid>
    );


}






