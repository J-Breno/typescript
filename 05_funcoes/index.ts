function withoutReturn():void {
    console.log("Está função não tem retorno!");
    
}

function greeting(f: (name: string) => string, userName:string) {

    console.log("Preparando")
    const greet = f(userName);
    console.log(greet)
}

