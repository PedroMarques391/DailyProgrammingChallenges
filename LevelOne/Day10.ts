interface Udict {
    name: string
    age: number
    occupation: string
    city: string
}

const yourProfile: Udict = {
    name: "Anna",
    age: 22,
    occupation: "Professora",
    city: "Belém"
}

console.log({yourProfile})

yourProfile.name = "Sophya"
yourProfile.occupation = "Enfermeira"

console.log({yourProfile})