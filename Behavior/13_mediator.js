class User{
    constructor(name){
        this.name = name
        this.room = null
    }
    send(message, to){
        this.room.send(message, this, to``)
    }
    receive(message, from){
        console.log(`${from.name}=>${this.name}: ${message}`);
    }
}

class ChatRoom{
    constructor(){
        this.users={}
    }
    register(user){
        this.users[user.name] = user
        user.room = this
    }
    send(message, from, to){
        if(to){
            to.receive(message, from)
        }else{
            Object.keys(this.users).forEach(key=>{
                if(this.users[key] !== from){
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}

const bazenga = new User('Bazenga')
const valera = new User('Valera')
const gandon = new User('GANDON')
const room = new ChatRoom()

room.register(bazenga)
room.register(valera)
room.register(gandon)


bazenga.send('QQ', valera)
valera.send('qq', bazenga)
gandon.send('xyucoc')