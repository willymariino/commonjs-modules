const hobbies2 = require("./hobbies")
const names2 = require("./names")

function peoples() {
    hobbies2("videogiochi", "lettura", "coding")
    names2("Anna", "Rossi")
    return {
        hobbies2,
        names2

    }
}

peoples()