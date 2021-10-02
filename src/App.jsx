import React, {useRef, useEffect, useState} from 'react';
import Chart from './Components/Chart.jsx'
import { createRandomArray } from './Components/HelperFunctions.jsx';
import Options from './Components/Options.jsx'

export default function App(props)
{
    const parentDiv = useRef(null);
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);
    const [array, setArray] = useState(createRandomArray(10,1000,100));

    useEffect( () => 
    {
        if(parentDiv.current)
        {
            setWidth(parentDiv.current.offsetWidth);
            setHeight(parentDiv.current.offsetWidth * 0.3);
        }
    },[array])

    return(
        <div id='ParentDiv' ref={parentDiv} >
            <Options array = {array} setArray = {setArray} height={height}/>
            { 
                width ?
                <Chart width = {width} height={height} array = {array}/>
                :
                <p>Hello</p>
            }
        </div>
    )
}
