"use strict"

// 1 variantas
// var countries = [
// { name: "Kinija", area: 9596961, population: 1412600000},
// { name: "Japonija", area : 377975, population: 125502000},
// { name: "Vietnamas", area: 331699, population: 96208984},
// { name: "Tailandas", area: 513120, population: 66171439},
// { name: "Filipinai", area: 300000, population: 112328483},
// ]


// for(var x of countries){
// var pplPerSqKm = x.area / x.population
// var pplPerSqM = 1000000 * pplPerSqKm
// console.log(`Šalis: ${x.name}, joje gyvena ${(x.population/1000000).toFixed(2)} mln. gyventojų. Valstybės plotas: ${x.area} km², plotas, tenkantis vienam gyventojui: ${pplPerSqM.toFixed(2)} m².`)
// }


// 2 variantas, papildomai

var countries = [
{ name: "Kinija", area: 9596961, population: 1412600000},
{ name: "Japonija", area : 377975, population: 125502000},
{ name: "Vietnamas", area: 331699, population: 96208984},
{ name: "Tailandas", area: 513120, population: 66171439},
{ name: "Filipinai", area: 300000, population: 112328483},
]
var apskaiciavimas = (name, area, population) => {
var pplPerSqM = (x.area / x.population) * 1000000 
console.log(`Šalis: ${name}, joje gyvena ${(population/1000000).toFixed(2)} mln. gyventojų. Valstybės plotas: ${area} km², plotas, tenkantis vienam gyventojui: ${pplPerSqM.toFixed(2)} m².`)
console.log("================")
}

for(var x of countries){
    apskaiciavimas(x.name, x.area, x.population)
}

