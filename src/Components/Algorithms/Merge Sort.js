export function getMergeSortAnimations(array)
{
    const animations = [];
    const auxArray = Array.from(array);
    MergeSortHelper(array, 0, array.length - 1, animations, auxArray);
    return animations;
}

export function MergeSortHelper(array, low, high, animations, auxArray)
{
    if(low < high)
    {
        let middle = Math.floor((low + high) / 2);
        MergeSortHelper(array, low, middle, animations,  auxArray);
        MergeSortHelper(array, middle + 1, high, animations,  auxArray);
        Merge(array, low, middle, high, animations,  auxArray);
    }

}

export function Merge(array, low, middle, high, animations, auxArray)
{
    const lSize = middle - low + 1;
    const rSize = high - middle;

    let left = [];
    let right = [];

    for(let i = 0; i < lSize; i++)
    {
        left[i] = array[low + i];
    }
    for(let i = 0; i < rSize; i++)
    {
        right[i] = array[middle + i + 1];
    }

    left.push(Number.MAX_VALUE)
    right.push(Number.MAX_VALUE)

    let leftIndex = 0;
    let leftOriginalIndex = low;
    let rightIndex = 0;
    let rightOriginalIndex = middle + 1;

    for(let i = low; i<=high; i++)
    {
        //Push the left og index and right og index so we can change their colors in the main array 
        if(left[leftIndex] < right[rightIndex])
        {
            array[i] = left[leftIndex]
            //Now push i and the value at left og index because this is the value that will be placed at index i
            animations.push({swap1: i, swap2: auxArray.indexOf( left[leftIndex]) }) ;
            leftIndex++
            leftOriginalIndex++
        }
        else
        {
            array[i] = right[rightIndex]
            //Now push i and the value at left og index because this is the value that will be placed at index i
            animations.push({swap1: i, swap2: auxArray.indexOf( right[rightIndex]) }) ;
            rightIndex++
            rightOriginalIndex++
        }
    }
}