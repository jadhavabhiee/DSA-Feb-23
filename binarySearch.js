let array_test=[-10,2,3,4,5,9]

console.log(array_test)
// i want 4 element of this of array..
console.log(array_test[4])
function LinearSearch(arr,numberToBeSearched) {
    //look thru every el of array
    let i = 0;
    for (let i = 0; i < arr.length; i++) {
        if (numberToBeSearched === arr[i]) {
            return true;
            
        }
        
    }
    return false;
           
}

 console.log(LinearSearch(array_test,numberToBeSearched5));
 //>> true
 console.log(LinearSearch(array_test,numberToBeSearched10));