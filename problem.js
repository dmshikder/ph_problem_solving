function rotateLeft(arr,rotations){
    const rotatedArray = arr.concat();
    for(let i=0; i<rotations; i++){
        const firstNumber = rotatedArray.shift();
        rotatedArray.push(firstNumber);
    }
    return rotatedArray;
}