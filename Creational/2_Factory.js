class SimpleMemberShip{
    constructor(name){
        this.cost = 50
        this.name = name
    }

}
class StandartMemberShip{
    constructor(name){
        this.cost = 150
        this.name = name

    }

}
class PremiumMemberShip{
    constructor(name){
        this.cost = 500
        this.name = name
    }

}

class MemberFactory{
    static list={
        simple:SimpleMemberShip,
        standart:StandartMemberShip,
        premium:PremiumMemberShip
    }
    create(name, type='simple'){
        const Membership = MemberFactory.list[type]||MemberFactory.list.simple
        const member = new Membership(name)
        member.type = type
        member.define = function(){
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }
        return member
    }
}

const factory = new MemberFactory

const members = [
    factory.create('Bazenga', 's1mple'),
    factory.create('Marjello', 'premium')
]

console.log(members);
members.forEach(m=>m.define())