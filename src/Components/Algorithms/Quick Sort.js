import { swap } from "../HelperFunctions";
export function getQuickSortAnimations(array)
{
    const animations = [];
    QuickSortHelper(array, 0, array.length -1, animations);
    return [animations];
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
            swap(array, i, j);
            animations.push({swap1: i, swap2:j, pivot: high });
            animations.push({swap1: i, swap2:j, pivot: high });
        }
    }
    swap(array, i + 1, high)
    animations.push({swap1: i + 1, swap2:high, pivot: high });
    animations.push({swap1: i + 1, swap2:high, pivot: high });
    return (i + 1);
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