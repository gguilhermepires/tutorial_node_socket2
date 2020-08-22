const net = require('net');
const handleConnection = socket => {
    console.log('alguem se conectou');
   
    socket.on('end',()=>{
        console.log('desconectou');
    });
    socket.on('data',data=>{
        str = data.toString();
        if(str == "end")
            socket.end();
        else
            console.log('data',data.toString());
    });
}

const server = net.createServer(handleConnection);

server.listen(4000,'127.0.0.1');