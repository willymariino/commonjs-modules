const hobbies2 = require("./hobbies")
const names2 = require("./names")

function peoples() {
    hobbies2("hobbie1", "hobbie2", "hobbie3")
    names2("firstName", "lastName")
    return {
        hobbies2,
        names2

    }
}

peoples()