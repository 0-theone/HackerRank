function countingSort(arr) {
    let supplementary = [];
    const n = arr.length;
    
    //The algorithm creates the auxiliary/supplementary array and sets every index to 0
    for (let i = 0; i < n; i++) {
        supplementary[i] = 0;
    }
  
    //Every time a certain number is encountered in the input array the index of that number in the supplementary array increases by 1
    for (let i=0; i < n; i++) {
        supplementary[arr[i]] += 1;
    }

    return supplementary;

    //Sort the array
    /* for (let i = 0; i < n; i++) {
            while (supplementary[i] > 0) {
                arr[j++] = i;
                supplementary[i] -= 1;
            }
        }
        return arr; */
    }

console.log(countingSort([1,1,3,2,1]))


function countingSortVersion2(arr) {
    let counterArray = Array(5).fill(0);
    for (let number of arr) {
        counterArray[number]++
    }
    return counterArray;
}

console.log(countingSortVersion2([1,1,3,2,1]))