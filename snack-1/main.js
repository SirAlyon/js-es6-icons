/* Descrizione:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: 
marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: 
nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, 
nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */


const cars = [
    {
        marca: 'BMW',
        modello: 'Serie 1',
        alimentazione: 'Benzina'
    },
    {
        marca: 'VW',
        modello: 'Golf',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Fiat',
        modello: 'Punto',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Fiat',
        modello: 'Tipo',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Opel',
        modello: 'Astra',
        alimentazione: 'Elettrica'
    },
    {
        marca: 'Dacia',
        modello: 'Duster',
        alimentazione: 'GPL'
    },
    {
        marca: 'BMW',
        modello: 'Serie 2',
        alimentazione: 'Diesel'
    },
    {
        marca: 'VW',
        modello: 'Tiguan',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Audi',
        modello: 'Q3',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Nissa',
        modello: 'Micra',
        alimentazione: 'Metano'
    },
]


const benzina_car = cars.filter(car => {
    return car.alimentazione === 'Benzina'
})


const diesel_car = cars.filter(car => {
    return car.alimentazione === 'Diesel'
})


const other_fuel_car = cars.filter(car => {
    return car.alimentazione !== 'Diesel' && car.alimentazione !== 'Benzina'
})

console.log(benzina_car);
console.log(diesel_car);
console.log(other_fuel_car);