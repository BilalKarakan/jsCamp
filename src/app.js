console.log("Hello World!")

//var dolarBugun = 9.30

//var dolarDun = 9.20
//console.log(dolarDun)

let dolarBugun = 9.30

var dolarDun = 9.20

{
    var dolarDun = 9.10
}
// JS type safe değildir.
console.log(dolarDun)


const euroBugun = 11.2 // const veri tipindeki değişkenin değeri değişmez.
euroBugun = 11.1

//console.log(euroBugun) // Hata

//Arrays

let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]
console.log(konutKredileri)

console.log("/ul")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}