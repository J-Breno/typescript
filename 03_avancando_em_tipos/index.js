"use strict";
let numbers = [1, 2, 3];
const nomes = ["João", "Breno"];
// any = pode ser qualquer tipo de dado
function soma(x, y) {
    return x + y;
}
console.log(soma(5, 3));
const pessoa = { nome: "João Breno", altura: 1.75, idade: 20 };
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return firstName + " " + lastName;
    }
    return firstName;
}
function showId(id) {
    console.log(id);
}
// a diferença do type para o interface é que o interface pode ser alterado ao longo do código já o alias não
