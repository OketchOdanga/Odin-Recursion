//mergesort algorithm.
// an input of [3,2,1,13,8,5,0,1] should return [0,1,2,3,5,8,13].
// an input of [105,79,100,110] should return [79,100,105,110].

function mergeSort(array) {
   //base case
    if (array.length < 2) {
        return array;
    }
    const mid = Math.floor(array.length / 2);
    const leftArray = array.slice(0,mid);
    const rightArray = array.slice(mid);
    console.log(leftArray);
    console.log(rightArray);
    return merge(mergeSort(leftArray),mergeSort(rightArray));
}

function merge(leftArray,rightArray) {
    const sortedArray = [];
    let i = 0;
    let j = 0;
    while (leftArray.length > i && rightArray.length > j) {
        if (leftArray[i] < rightArray[j]) {
            sortedArray.push(leftArray[i])
            i++;
        } else {
            sortedArray.push(rightArray[j])
            j++;
        }
    }
    while (leftArray.length > i) {
        sortedArray.push(leftArray[i])
            i++;
    }
    while (rightArray.length > j) {
        sortedArray.push(rightArray[j])
            j++;
    }
    return  sortedArray;
   
}
const array = [105,79,100,110];
console.log(mergeSort(array));