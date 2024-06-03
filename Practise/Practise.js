/* 1.Calculate the Area, circumference, diameter of circle */

const r = [3,1,2,3,4,5]

// Calculate the Area of circle
const area = function(r){
    return Math.PI*r*r;  
};

// calculat the circumference of circle
const circumference = function(r){
    return 2*Math.PI*r;
};

// calculate the diameter of area
const diameter = function(r){
    return 2*r;
};

// Higher Ordered function
const calculate = function(r, per) {
    const arr = [];
    for(i=0; i<r.length; i++){
        arr.push(per(r[i]))
    }
    return arr;
};

// call the all function
console.log(calculate(r, area));
console.log(calculate(r, circumference));
console.log(calculate(r, diameter));




/* 2.Calculate the Area of rectangle , triangle */

// Logic - Area of rectangle
const rectangle = function(len, wid){
    const areaOfRectangle = len*wid;
    return areaOfRectangle;
};

// Logic - Area of triangle
const triangle = function(len, wid){
    const areaOfTriangle = (len*wid)/2;
    return areaOfTriangle;
};

// Higher ordered function

const cal = function(len, wid, perform){
    const arr = [];
    arr.push(perform(len, wid))
    return arr;
}

// call the function

console.log(cal(5, 5, rectangle));
console.log(cal(5, 5, triangle));


/* 3.Multiply Each element by 2 and return the only those element which are greater than 10? */

let arr1 = [2, 3, 4, 6, 10]; // Output : 4, 6, 8, 12, 20
