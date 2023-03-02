//selection Sort

let numbers = [35,42,12,5,92,7,11]

const selectionSort = (arr) => {

     // for loop to iterate through the total number of passes, it depend how many items we have in array
     for (let i = 0; i < arr.length; i++) 
     {
        // we set the first value at the MAX, checking agains the value at position max because we start as position 0
        let max = 0;

        // we look through all the values in array, for loop to check if any values are greater than the first
        // we start at 1 (j=1) cause we already know  what is the value of 0 (index) is and we checked it before by Max=0
        // then we do care about the next index which is  j=1
        for (let j = 1; j < arr.length - i; j++) 
        {
            // checking the value of j  is bigger than max value then
            if (arr[j] > arr[max])
            {
                // we swap the value of j into Max , set max to the value of the position
                max = j;
            }
            //after all things, it figure it out which is the highest value, and take note the position
        }
        // swaping the value of Max into the value of [arr.length-1-i] last position
        // arr.length -1 - i , we dont care about last position cause we put MAX there
        // also we are looking for last position  base on how many loops we are gonna through (for i)
        [arr[max], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[max]];
}
return arr;
}
console.log(selectionSort(numbers));
// for testing and see the result