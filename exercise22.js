/*

12. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.

*/

class VolumeCylinder{
  constructor(radius, height){
    this.radius = radius;
    this.height = height;
  }

  volume(){
    return (Math.PI * this.radius * 2 * this.height).toFixed(2);
  }
}

const calculateVolume = new VolumeCylinder(2,3);
console.log(calculateVolume.volume());
