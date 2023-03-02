// Bubble Sort

function bubblesort(arr){
    // the outside FOR, its for asking to compare index for 2nd,3rd...till all be sorted
    for (var j=0; j<arr.length; j++){
        //the inside FOR, its only for 1 time checking all index to the end 
        //arr.length-j  means when 1st time comparing value of indexes then greatest will be in last
        // index of array, then for 2nd time, comparing them except last one which was already done
        for (var i=0; i<arr.length-j; i++){
        //if the value of current index greater than next value of index 
        if (arr[i]>arr[i+1]){
            //1st way to swap the value of 2 index
            // let temp = arr[i];
            // arr[i] = arr[i+1];
            // arr[i+1]=temp;
            //2nd way to swap the value of 2 index
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]]

        }
    }
}
console.log(arr);
}

//bubblesort ([33,10,7,38,58,65,50,17,2,26]);
bubblesort([33,10,7,38,58,65,50,17,2,26]);