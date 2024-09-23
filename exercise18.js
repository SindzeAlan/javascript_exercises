/*
  
 8. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.
  
 */

let obj1 = {
  name: 'illiam',
  age: 29
}

let obj2 = {
  name: 'Willim',
  age: 29
}

if(obj1.hasOwnProperty('name') === obj2.hasOwnProperty('name')){
  console.log(true)
}
else{
  console.log(false)
}