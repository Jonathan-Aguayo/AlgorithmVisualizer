import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import {ChangeBarColors, createRandomArray, getQuickSortAnimations, SwapGraphBars} from './HelperFunctions.jsx'

export default function Options(props)
{
    const [bars, setBars] = React.useState(10);
    const [algo, setAlgo] = React.useState('Quick-Sort')
    const SECONDARY_COLOR = 'black'
    const PRIMARY_COLOR = 'white'
    const [speed, setSpeed] = React.useState(100)

    const handleBarChange = (event) =>
    {
        setBars(event.target.value);
        props.setArray(createRandomArray(event.target.value,1000,100));
    }

    const handleAlgoChange = (event) =>
    {
        setAlgo(event.target.value);
    }

    function QuickSort(array)
    {
        const [animations, sorted] = getQuickSortAnimations(array)
        let arrayBars = document.getElementsByClassName('visx-bar')
        let g = document.getElementById('GraphBarGroup')

        let swapi = animations[i].swap1;
        let swapj = animations[i].swap2;
        ChangeBarColors(arrayBars,swapi,swapj,'green')
        GraphBars(arrayBars,swapi,swapj)
        ChangeBarColors(arrayBars,swapi,swapj,'white')
    
    }

    function SortArray()
    {

        switch (algo)
        {
            case 'Quick-Sort' :
                QuickSort(props.array);
                break;
            default:
                alert('Sorry that is not an algorithm');

        }

    }

    return(
        <div style={{margin:'20px'}}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Number of bars</InputLabel>
            <Select
            labelId="demo-simple-select-label"
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

        <FormControl fullWidth>
            <InputLabel id="Algo-select-label">Sorting Algorithm</InputLabel>
            <Select
            labelId="Algo-Select-label"
            id="Algo-Select"
            label="Algorithm"
            value={algo}
            onChange = {handleAlgoChange}
            >
            <MenuItem value={'Merge-Sort'}>Merge Sort</MenuItem>
            <MenuItem value={'Insertion-Sort'}>Insertion Sort</MenuItem>
            <MenuItem value={'Quick-Sort'}>Quick Sort</MenuItem>
            </Select>
        </FormControl>

        <Button variant='outlined' onClick = {SortArray}> Go</Button>
        </div>
    );


}






