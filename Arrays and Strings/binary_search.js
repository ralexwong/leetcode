const binarySearch = (array, target) => {
    let low = 0;
    let high = array.length-1;

    while (low < high) {
        let middle = Math.floor(low+high) / 2;

        if (array[middle] < target) {
            low = middle+1
        } else {
            high = middle - 1
        }
    }

    return low
}


let array = [2,2,2,2,2,2,2,2,3,4,5,6,6,6,7]

console.log(binarySearch(array), 2)