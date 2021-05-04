const socket=io();

const lblOnline=document.querySelector('#lblOnline');
const lblOffline=document.querySelector('#lblOffline');
const txtMensaje=document.querySelector('#txtMensaje');
const btnEnviar=document.querySelector('#btnEnviar');

socket.on('connect',()=>{
    lblOnline.style.display=''
    lblOffline.style.display='none'
})

socket.on('disconnect',()=>{
    lblOnline.style.display='none'
    lblOffline.style.display=''
})

socket.on('mensaje-servidor', (payload)=>{
    console.log(payload);
})

btnEnviar.addEventListener('click',()=>{
    const mensaje=txtMensaje.value;
    const payload={
        mensaje,
        id:'123abc',
        fecha:new Date().getTime()
    }

    socket.emit('enviar-mensaje',payload,(id)=>{
        console.log('respuesta desde el servidor', id);
    });
})