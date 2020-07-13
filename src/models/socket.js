var Socket = function(socket){
    this.room     = access.room;
    this.message      = access.message;
    this.table          = access.table;
 
    
};

var io=Socket.get_io_object=function(io)
{
  console.log('io object get succes' + io)
  return io;
}
Socket.new_brodcast_action=function(room,_message,_action,_table){
  console.log('------------------------')
  console.log(_message)
  console.log('------------------------')
    io.sockets.on('connection', function (socket) {

        socket.on(room, function (room) {
            socket.join(room)
            console.log(room)
        });
      
        socket.on(room,({room,message,table}) => {
          socket.broadcast.to(room).emit(room,{
            message:_message,
            table:_table
          })
    })
         
      
});

}
module.exports= Socket;