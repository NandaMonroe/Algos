// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

var arr1 = [1, 3, 3, 5, 8, 10,];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];
var expected12 = [1, 3, 5, 8, 10]

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];
var expectedAB = [1, 3, 4, 5, 8, 10]


function mergeDedupe(arr1, arr2) {

    let results = []                                                                       //create varible with empty array for results

    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {                                           //use while loop to go over both arrays

        if(arr1[i] === arr2[j]){                                                           //check if index of first array is equal to second array index
            if (arr1[i] !== results[results.length - 1]){                                  //if it is, check if value exist in new array if doesnt exist push into new array 
                results.push(arr1[i])
                i++
                j++
            } else {                                                                       //if it does exist, just increment both indexes
                i++
                j++
            }
        }
        else {                                                                             //if not equal and min value is not in new array, push into array
            if (arr1[i] < arr2[j] && arr1[i] !== results[results.length - 1]){
                results.push(arr1[i])
                i++                                                                        //increment its index

            } else if (arr2[j] < arr1[i] && arr2[j] !== results[results.length - 1]) {
                results.push(arr2[j])
                j++
            }
        }
    }

    return results                                                                         //return new array
}

console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]))
// console.log(mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]))
// console.log(mergeDedupe(arr1, arr2))
// console.log(mergeDedupe(arrA, arrB))
