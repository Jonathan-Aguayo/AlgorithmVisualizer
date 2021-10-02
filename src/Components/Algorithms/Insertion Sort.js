export function getInsertionSortAnimations(array)
{
    const animations = [];
    const auxArray = Array.from(array)
    InsertionSortHelper(array, animations, auxArray);
    return animations;
}

export function InsertionSortHelper(array, animations, auxArray)
{
    for ( let i = 0; i < array.length; i++)
    {
        let key = array[i];
        let j = i -1;

        while( j >= 0 && array[j] > key)
        {
            array[j + 1] = array[j];
            animations.push({index: j + 1, value: auxArray.indexOf(array[j])})
            j--;
        }
        array[j + 1] = key;
        animations.push({index: j + 1, value: auxArray.indexOf(key)})
    }
}