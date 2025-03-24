function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

const person = createPerson("Anna", "Rossi")
console.log(person)