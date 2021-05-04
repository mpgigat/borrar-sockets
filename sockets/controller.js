const socketController=(socket)=>{
    console.log('Cliente conectado ',socket.id);

    socket.on('disconnect',()=>{
        console.log('Cliente desconectado ',socket.id);
    })

    socket.on('enviar-mensaje',  (payload,callback)=>{
        const id=12345689
        callback(id)
        
        socket.broadcast.emit('mensaje-servidor',payload)
    })
}

export {socketController}