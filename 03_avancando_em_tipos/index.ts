let numbers: number[] = [1, 2, 3];
const nomes: string[] = ["João", "Breno"];

// any = pode ser qualquer tipo de dado

function soma(x: number, y: number): number {
  return x + y;
}

console.log(soma(5, 3));

const pessoa : {
   nome: string, altura: number, idade: number, corOlho?: string
} = {nome:"João Breno", altura: 1.75, idade: 20}

function advancedGreeting(firstName: string, lastName?: string): string {
    if(lastName !== undefined) {
        return firstName + " " + lastName
    }
    return firstName
}

type ID = string | number

function showId(id: ID) {
    console.log(id)
}

interface Point{
    x: number
    y: number
    z: number
}

// a diferença do type para o interface é que o interface pode ser alterado ao longo do código já o alias não