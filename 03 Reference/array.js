// Declaring array
const numArr = [1,2,3,4,5];
console.log(numArr);

const stringArr = ['eat','code','sleep','repeat'];
console.log(stringArr);

// Access item
for(let i = 0; i < stringArr.length;i++){
    console.log(stringArr[i]);
}

// Nested array
const nestArr = [0,["jiro","wan"],1,true, 'three']
console.log(nestArr);
console.log(nestArr[1][1]);

// Exercise
const favSingers = ["Judika", "Ariel", "Ari Lasso"]
console.log(favSingers[0]);
const favNumbers = [1,5,7,9];
const mixedArr = ["string",["otherarrray"],123,true]
console.log(mixedArr[1]);
console.log(mixedArr[1][0]);
console.log(mixedArr[3]);

// Array operations
const leftArray = ["Lenin", "Karl", "Stalin", "Aleks","Vladimir","Ivankov"];
const rightArray = ["John", "George", "Hillary", "Abraham","Joe"];
let peaceArray = leftArray.concat(rightArray);

console.log(leftArray);
console.log(rightArray);
console.log(peaceArray);

console.log(peaceArray.slice(3,8));
console.log(peaceArray.splice(1,4));
console.log(peaceArray.join(" vs "));

console.log("Joh ->",peaceArray.includes('Joh'));
console.log("john ->",peaceArray.includes('john'));
console.log("John ->",peaceArray.includes("John"));