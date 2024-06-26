/*
    findObjectsFilter({searchFor}, [itemsArr])

    given a 'search for' {object} with primitive values and a list of objects
    return a new list of objects containing the same key value pairs as the search for
*/

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];
// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    // { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

// function findObjectsFilter(searchObj, items) {
//     const output = []

//     for (let elem of items) {
//         let isMatch = true
//         for ( let someKey in searchObj) {
//             if (!elem.hasOwnProperty(someKey) || elem[someKey] != searchObj[someKey]) {
//                 isMatch = false
//             }
//         }
//         if (isMatch) {
//             output.push(elem)
//         }
//     }

//     return output
// }


// console.log(findObjectsFilter(searchFor1, items))
// console.log(findObjectsFilter(searchFor2, items))

function sortObj(items) {
    
    let sorted_obj = items.sort(dynamicSort("lastName"))
    

    return sorted_obj
}

console.log(sortObj(items))

function compare( a, b ) {
    if ( a.last_nom < b.last_nom ){
      return -1;
    }
    if ( a.last_nom > b.last_nom ){
      return 1;
    }
    return 0;
  }
  
objs.sort( compare );