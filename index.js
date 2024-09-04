const SMTPServer = require("smtp-server").SMTPServer;
const server = new SMTPServer({
    allowInsecureAuth:true,
    authOptional:true,
    onConnect(session,cb){
        console.log("onConnect",session.id)
        cb()
    },
    onMailFrom(address,session,cb){
        console.log("On mail from",address.address,session.id);
        cb()
    },
    onRcptTo(address,session,cb){
        console.log("On receipt to",address.address,session.id);
        cb()
    },
    onData(stream,session,cb){
        stream.on('data',(data)=>console.log(data.toString()));
        stream.on('end',cb())
    }
});

server.listen(25,()=>console.log("server running on 25"))