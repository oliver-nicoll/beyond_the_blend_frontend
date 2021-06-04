const femaleChar = character.filter(
    (character) => character.gender === 'female'
);

const oneMaleChar = character.some((character) => character.gender === 'male')
//returns back true or false 

//reduce has a Accumulator pattern
//takes in a callback function that gets a reference to an Accumulator and current value
const totalMass = characters.reduce((acc, curr) =>  acc + curr.mass, 0)

const totalHeight = characters.reduce((acc, curr) => acc + curr.height, 0)

//{blue:3,  brown: 1...} Accumulator and currentValue - initial start value
const charEyeColor = characters.reduce((acc, curr) => {
    if(acc[curr.eye_color]) {
        acc[curr.eye_color]++
    } else {
        acc[eye_color] = 1
    }
    return acc;
}, {})

