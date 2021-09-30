//Function to swap array indexes
export function swap(array, indexA, indexB)
{
    let temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



export function getQuickSortAnimations(array)
{
    const animations = [];
    if(array.length <= 1)
        return array;
    QuickSortHelper(array, 0, array.length -1, animations);
    return [animations, array];
}

export function QuickSortHelper(array, low, high, animations)
{
    if(low < high)
    {
        let p = partition( array, low, high, animations);

        QuickSortHelper(array, low, p - 1, animations);
        QuickSortHelper(array, p + 1, high, animations);                             
    }
}

export function partition(array, low, high, animations)
{
    let pivot = array[high];
    let i = (low - 1);
    let j = low;
    for (j; j < high; j++)
    {

        if(array[j] < pivot)
        {                                                                          
            i = i+1;
            //push indexs because we are comparing 
            //push again to signify swapping

            swap(array, i, j);
            animations.push({swap1: i, swap2:j, pivot: high });
            animations.push({swap1: i, swap2:j, pivot: high });


        }
    }
    //push indexs because we are comparing 
    

    swap(array, i + 1, high)
    animations.push({swap1: i + 1, swap2:high, pivot: high });
    animations.push({swap1: i + 1, swap2:high, pivot: high });


    return (i + 1);
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
    return new Promise( (resolve, reject) => 
    {
        const tempy = arrayBars[BarI].getAttribute('y');
        const barjHeight = Number(arrayBars[BarJ].getAttribute('y'))
        arrayBars[BarI].setAttribute('y',barjHeight);
        arrayBars[BarJ].setAttribute('y', tempy);
        resolve('done');
    })
}

export function SwapGraphBarsX(arrayBars,BarI, BarJ)
{
    return new Promise( (resolve, reject) => 
    {
        const tempy = arrayBars[BarI].getAttribute('x');
        arrayBars[BarI].setAttribute('x', arrayBars[BarJ].getAttribute('x'));
        arrayBars[BarJ].setAttribute('x', tempy);
        resolve('done');
    })
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


