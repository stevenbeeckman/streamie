(function () {
  var ol = document.createElement("ol");
  document.body.appendChild(ol);

  io.setPath('/ext/socket.io/');
  var socket = new io.Socket('localhost', { 
    port: 8888,
    transports: ['websocket', 'htmlfile', 'xhr-multipart', 'xhr-polling']
  });
  socket.connect();
  socket.send('client connect');
  socket.on('message', function(data) {
    data = JSON.parse(data);
    console.log(data);
    /* ********* filtering *******
       var filter = getFilters();
       for(i = 0; i < filter.length; i++){
           if(data.text.contains(filter[i])){
              break;
	   }
       }
    */

    /* ********* mute users ********
       var mutedUser = getMutedUsers();
       for(i = 0; i < mutedUser.length; i++){
           if(data.user.screen_name.equals(mutedUser[i])){
	      break;
	   }
       }  
     */

    var li = document.createElement("li");
    li.textContent = data.text || JSON.stringify(data, null, " ");
    ol.appendChild(li);
    li.focus();
  });
})();
