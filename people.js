const hobbies = require("./hobbies")
const fullNames = require("./names")

function people() {
    return {
        hobbies: hobbies("videogiochi", "lettura", "coding"),
        fullNames: fullNames("Anna", "Rossi")

    }
}

console.log(people())