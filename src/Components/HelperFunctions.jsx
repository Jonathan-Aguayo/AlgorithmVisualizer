//Function to swap array indexes
export function swap(array, indexA, indexB)
{
    let temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
}

export function SwapGraphBarsHeight(arrayBars,BarI, BarJ)
{
    return new Promise( (resolve, reject) => 
    {
        const tempheight = arrayBars[BarI].getAttribute('height');
        arrayBars[BarI].setAttribute('height', arrayBars[BarJ].getAttribute('height'));
        arrayBars[BarJ].setAttribute('height', tempheight);
        resolve('done');
    })
}

export function SwapGraphBarsY(arrayBars,BarI, BarJ)
{
    const tempy = arrayBars[BarI].getAttribute('y');
    const barjHeight = Number(arrayBars[BarJ].getAttribute('y'))
    arrayBars[BarI].setAttribute('y',barjHeight);
    arrayBars[BarJ].setAttribute('y', tempy);
}

export const SwapGraphBars =  (arrayBars, i, j) =>
{
    SwapGraphBarsHeight(arrayBars,i,j).then( () => 
    {
        SwapGraphBarsY(arrayBars,i,j);
    })
}

export const ChangeBarColors = (arrayBars, i, j, color) =>
{
    arrayBars[i].style.fill = color;
    arrayBars[j].style.fill = color;
}

export function createRandomArray(arraySize, MaxNumber, minNumber)
{
    let randomArray = [];
    while (randomArray.length < arraySize)
    {
        let randomNumber = Math.floor(Math.random() * MaxNumber) + minNumber;
        if(!randomArray.includes(randomNumber))
        {
            randomArray.push(randomNumber);
        }
    }
    return randomArray;
}

export function ChangeBarHeight(array, index, value)
{
    array[index].setAttribute('height', value);
}

export function ChangeBarY(array, index, height, yMax)
{
    array[index].setAttribute('y', yMax - height);
}