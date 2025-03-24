function createPerson(firstName, lastName) { // firstName e lastName = parametri segnaposto
    return {
        firstName,
        lastName
    }
}

const person = createPerson("Anna", "Rossi") //argomenti quando vado a chiamare la funzione
console.log(person)

module.export = createPerson