class User {
    name: string = "Breno"
    age: number = 9
}

const breno = new User();

class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const joao = new NewUser("Breno", 19)

class Machine {
    protected name 

    constructor(name: string) {
        this.name = name;
    }
}

const trator = new Machine("Trator");

class KillerMachine extends Machine {
    public guns 

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns;
    }
}

const destroyer = new KillerMachine("Destroyer", 12)

class Dwarf {
    name 

    constructor(name: string) {
        this.name = name;
    }

    greeting() {
        console.log("Hey Stranger")
    }
}

class Person {
    private name
    private surname

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return this.name + " " + this.surname;
    }
}

const Breno = new Person("João", "Breno")

Breno.fullName