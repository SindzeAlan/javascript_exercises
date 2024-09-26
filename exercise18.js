/*
  
 8. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.
  
 */

const isObjectSubset = (obj1, obj2) => {

  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (obj1[key] !== obj2[key]) {
        return `The two objects does not have properties in commun`;
      }
    }
  }
  return `The two objects have propertties in commun`;
}

const object1 = { name: 'Alice', age: 25, city: 'Paris' };
const object2 = { age: 25, city: 'Paris' };
const object3 = { age: 30, city: 'Paris' };

console.log(isObjectSubset(object1, object2)); 
console.log(isObjectSubset(object1, object3)); 
