function addToCart(productName = "Elma", quantity) {
    console.log("Sepete Ekle: " + productName + "Adet: " + quantity)
}
//addToCart("Bilgisayar")
addToCart("Buzdolabı", 2)
    //addToCart("Klima")

let sayHello = () => {
    console.log("Hello World!")
}
sayHello()

let sayHello2 = function() {
    console.log("Hello Javascript")
}
sayHello2()

function addToCart2(productName, quantity, unitPrice) {

}
addToCart2("Elma", 2, 20)
addToCart2("Armut", 3, 15)
addToCart2("Limon", 4, 10)

let product1 = { productName: "Elma", quantity: 2, unitPrice: 20 }

function addToCart3(product) {
    console.log("Ürün Adı: " + product.productName)
    console.log("Adet: " + product.quantity)
    console.log("Birim Fiyat: " + product.unitPrice)

}
addToCart3(product1)

//Reference Type
let product2 = { productName: "Elma", quantity: 2, unitPrice: 20 }
let product3 = { productName: "Elma", quantity: 2, unitPrice: 20 }
product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName) // Objects are reference type.

//Value Type
let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 30
console.log(sayi1)

function addToCart4(x) {
    console.log(products)
}

let products = [
    { productName: "Elma", quantity: 2, unitPrice: 20 },
    { productName: "Armut", quantity: 2, unitPrice: 20 },
    { productName: "Karpuz", quantity: 2, unitPrice: 20 }
]

addToCart4(products)

function add1(number1, number2) {
    console.log(number1 + number2)
}
add1(20, 30)

function add2(...numbers) { //rest
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    console.log(total)
}
add2(20, 30, 40, 50)

// function add3(...numbers, something) { //rest
//     let total = 0
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i]
//     }
//     console.log(total)
//     console.log(something) //Hata
// }
// add3(20, 30, 40, 50)

let numbers = [20, 30, 40, 50, 60]
    // console.log(Math.max(30, 50, 60))
console.log(numbers)
console.log(...numbers)
console.log(Math.max(...numbers))

// let regions = ["İç Anadolu", "Marmara", "Karadeniz"]
let [icAnadolu, marmara, karadeniz, [icAnadoluSehirler]] = [
    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "20M" },
    { name: "Karadeniz", population: "15M" }
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Rize", "Samsun"]
    ]
]


console.log(icAnadolu.name)
console.log(marmara.population)

let newProductName, newQuantity, newUnitPrice

    ({ productName: newProductName, quantity: newQuantity, unitPrice: newUnitPrice } = { prodectName: "Elma", quantity: 5, unitPrice: 10 })

console.log(newProductName)
console.log(newQuantity)
console.log(newUnitPrice)