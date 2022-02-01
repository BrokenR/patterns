class Server{
    constructor(ip, port){
        this.ip = ip
        this.port = port
    }
    get URl(){
        return `https://${this.ip}:${this.port}`
    }
}

function aws(server){
    server.isAWS = true
    server.awsInfo = function(){
        return server.URl
    }
    return server
}

function azure(server){
    server.isAzure = true
    server.port += 500
    return server
}

const s1 =  aws(new Server('12.34.56.78', '8080'))
console.log(s1.awsInfo());
const s2 = azure(new Server('98.87.65.54', 9590))
console.log(s2.URl);