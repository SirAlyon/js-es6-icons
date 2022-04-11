/* Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una 
frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
 */

const team = [
    {name: 'Alessio', surname: 'Sada', age: 24},
    {name: 'Luca', surname: 'Rossi', age: 45},
    {name: 'Mattia', surname: 'Bianchi', age: 16},
    {name: 'Giulia', surname: 'Verdi', age: 22},
    {name: 'Martina', surname: 'Ferrari', age: 17},
    {name: 'Davide', surname: 'Sorti', age: 18},
    {name: 'Stefano', surname: 'Ferrari', age: 55},
]

const result = team.map((person) => {
    if (person.age >= 18){
        return `${person.name} ${person.surname} può guidare!`
    } else{
        return `${person.name} ${person.surname} è minorenne, non può guidare!`
    }
})

console.log(result);