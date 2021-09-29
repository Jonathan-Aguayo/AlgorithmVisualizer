import React, {useRef, useEffect, useState} from 'react';
import Chart from './Components/Chart.jsx'
import { createRandomArray } from './Components/HelperFunctions.jsx';
import Options from './Components/Options.jsx'

export default function App(props)
{
    const parentDiv = useRef(null);
    const [width, setWidth] = useState(null);
    const [array, setArray] = useState(createRandomArray(10,1000,100));

    useEffect( () => 
    {
        if(parentDiv.current)
        {
            setWidth(parentDiv.current.offsetWidth);
        }
    },[array])
    return(
            <div id='ParentDiv' ref={parentDiv} >
                <Options array = {array} setArray = {setArray}/>
                { 
                    width ?
                    <Chart width = {width} array = {array}/>
                    :
                    <p>Hello</p>
                }
            </div>
    )


}
