const car = {
    wheels: 4,
    init(){
        console.log(`У меня есть ${this.wheels} колеса, мой владелец ${this.owner}`);
    }
}

const carWIthOwner = Object.create(car, {
    owner: {
        value: 'Dimitriy'
    }
})

carWIthOwner.init()