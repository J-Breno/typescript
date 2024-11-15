interface Product {
    name: string
    price: number
    isVailable: boolean
}

function showProductDetails(product: Product) {
    console.log(product.name, product.price)
}

const shirt: Product = {
    name: 'Camisa',
    price: 10.00,
    isVailable: true
}

showProductDetails(shirt)

type fiveNumbers = [number, number, number, number, number];

const fiveNumbersArray: fiveNumbers = [1, 2, 3, 4, 5]