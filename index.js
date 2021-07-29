
//  1. Find Highest Frequency (findHighestFreq)
//
//  Goal: find the most frequent occurrence in an array
//
//  Input: an array (<inputArr>) i.e. [2, 4, 9, 4, 2, 32, 4, 5, 2, 1]
//
//  Output: most frequent occurrence i.e. '4' in the above example
//
//  Note: if there is no winner, return 'null'

export function findHighestFreq(inputArr) {

  const freqMap = inputArr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;

  }, {});

  // filter through the map to see if they are all the same
  const sortedFreqMapValues = Object.values(freqMap).sort((a,b) => a - b)
  if([...new Set(sortedFreqMapValues)].length <= 1){
    return null
  }
  const maxFreq = Object.keys(freqMap).reduce((prev, curr) => {
    let retValue;
    if(freqMap[curr] > freqMap[prev]) {
      retValue = curr
    } else {
      retValue = prev
    }
    if(/^-?\d+$/.test(String(retValue))) {
      retValue = parseInt(retValue);
    }
    return retValue;
  })

  return maxFreq
}


//  2. Get Property Array (getPropArr)
//
//  Goal: return an array of values of a specific property from an array of objects
//
//  Input: an array of objects (<objects>), and a property string (<field>) i.e.
//
//    objects = [{id: 1, name: 'joe'}, {id: 2, name: 'tom'}, {id: 3, name: 'mike'}] 
//            
//    field   = 'name'
//
//  Output: an array of values i.e. ['joe', 'tom', 'mike'] in the above example
//
//  Note: if <objects> is undefined, return 'null'

export function getPropArr(objects, field) {
  if(!objects) {
    return null
  }
  return objects.map(obj => obj[field] || null)
}





//  3. Sort Object Array (sortObjArr):
//
//  Goal: sort an object array in a particular order based on field value
//
//  Input: an array of objects (<objects>), a property string (<field>), and an <order> i.e.
//
//    'asc'  = ascending:
//              A, B, C, D (strings / alphabetically)
//              1, 2, 3, 4 (numbers or counts / numerically)
//
//    'desc' = descending: 
//              D, C, B, A
//              4, 3, 2, 1
// 
//  Output: the initial array of <objects> sorted by <field> in the appropriate <order>
//    
//    Reference './tests/mockUsers.js' for the user data structures
//
//  Note: should be able to sort objects based on the following fields:
//
//    firstName (string / alphabetically)
//    lastName (string / alphabetically)
//    email (string / alphabetically)
//    groups (count / numerically)
//    age (number / numerically)
export const sortObjArr = (arr, prop, order) => {

  if(['firstName','lastName','email'].includes(prop)){
    if(order === 'asc'){
      return arr.sort((a, b) => a[prop].localeCompare(b[prop]))
    }
    return arr.sort((a, b) => b[prop].localeCompare(a[prop]))
  }
  else if(prop === "age"){
    if(order === 'asc'){
      return arr.sort((a, b) => a[prop] - b[prop])
    }
    return arr.sort((a, b) => b[prop] - a[prop])
    }
    else if(prop === "groups"){
      if(order === 'asc'){
        return arr.sort((a, b) => a[prop].length - b[prop].length)
      }
      return arr.sort((a, b) => b[prop].length - a[prop].length)
    }
  }