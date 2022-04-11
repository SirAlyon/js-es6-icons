/* A partire da un array di stringhe, crea un secondo array 
formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke'] */

const team = ['FRODO', 'aragorn', 'LeGoLaS', 'THEODEN']

const teamCapitalized = team.map((string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
})

console.log(teamCapitalized);