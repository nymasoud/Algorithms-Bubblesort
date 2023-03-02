
const insertionsort = (arr) => 
{
    // for loop to iterate through the total number of passes, it depend how many items we have in array
    for (let i=0; i < arr.length; i++)
    {
        //we copy value i into j cause  i wont back all the way, 
        let j= i;
        //if the value of j leaser than its before/behind value, then swap the value
        while(arr[j] < arr[j-1])
        {
            [arr[j],arr[j-1]] = [arr[j-1], arr[j]]
            // we decrease the index place to before/behind, to check if the previous index value is leaser OR not
            j--
        }
    }
    return arr
}
// testing and see the output of our function
console.log(insertionsort([3,5,74,91,2,63,7]))