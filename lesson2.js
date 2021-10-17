//for (let i of arr) {
    console.log(i)
}//



//for (let i = 0; i < arr.length; i++) {
    console.log(i)
}//



// let sum = 0
for (let i of arr) {
    console.log(i)
    sum = sum + i
}
console.log(sum) //



// let sum1 = 0
for (let i of arr) {
    console.log(i)
   if ( i %2 == 0) {
       sum1 = sum1 + i
   }
}
console.log(sum1) //



//let arr2 = [5, 4, 3, -3, -10, -1, 8, -20, 0]
let newArr = []
for (let item of arr2) {
    if ( item > 0) newArr.push(item)
}
console.log(newArr)//



//let arr3 = [5, 4, 3, 8, 0]
let resArr = []
let limit = 5

for (let item of arr3) {
  if (item >= limit) resArr.push(item)
}
console.log(resArr)//



//const pupils = [
    { name: 'Masha', age: 8 },
    { name: 'Dasha', age: 12 },
    { name: 'Alex', age: 10 },
    { name: 'Tim', age: 11 },
  ]
    for (let pupil of pupils) {
    if (pupil.age > 10) {
      console.log(pupil.name)
    }
  } //


  
//const singers = ['Sia', 'Doja Cat', 'Beyonce']
const newSingers = []

for (let singer of singers) {
  newSingers.push({
    name: singer,
    length: singer.length
  })
}

console.log(newSingers)
for (let singer of newSingers) {
    console.log(singer.name + ' - ' + singer.length)
  }//
