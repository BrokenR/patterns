class Employee{
    constructor(name, salary){
        this.name = name
        this.salary = salary
    }
    responsibilities(){}
    work(){
        return `${this.name} working ${this.responsibilities()}`
    }
    getPaid(){
        return `${this.name} получает ${this.salary} РУБ`
    }
}

class Developer extends Employee{
    constructor(name, salary){
        super(name, salary)
    }
    responsibilities(){
        return 'процесс создания программ'
    }
}


class Tester extends Employee{
    constructor(name, salary){
        super(name, salary)
    }
    responsibilities(){
        return 'процесс тестирования программ'
    }
}

 const dev = new Developer('bazenga', 150000)
 console.log(dev.getPaid());

  const tester = new Tester('vika', 90000)
  console.log(tester.getPaid());