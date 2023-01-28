function rotateLeft(arr,rotations){
    const rotatedArray = arr.concat();
    for(let i=0; i<rotations; i++){
        const firstNumber = rotatedArray.shift();
        rotatedArray.push(firstNumber);
    }
    return rotatedArray;
}

const rotations = 2;
const anyArray = [1,2,3,4,5];

console.log(rotateLeft(anyArray,rotations))