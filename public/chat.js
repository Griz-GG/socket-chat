const socket = io()


let message=document.getElementById('message');
let usarname=document.getElementById('usarname');
let btn=document.getElementById('send');
let outout=document.getElementById('outout');
let action=document.getElementById('action');

btn.addEventListener('click',function (){
    socket.emit('chat:message',{
        message:message.value,
        usarname:usarname.value
    });
    
});
message.addEventListener('keypress',function(){
    socket.emit('chat:typing',usarname.value);
});

socket.on('chat:message',function(data){
    action.innerHTML=  ``;
    outout.innerHTML +=  `<p> 
    <strong> ${data.usarname} </strong>:${data.message}
    ${data.message}
    </p>`
});
socket.on('chat:typing', function (data){
    action.innerHTML=  `<p><em> ${data} is typing a message.</em></p>`
});