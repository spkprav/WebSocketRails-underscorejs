// connect to server like normal
var dispatcher = new WebSocketRails('localhost:3000/websocket');

// subscribe to the channel
var channel = dispatcher.subscribe('new_posts');

// You can also pass an object to the subscription event
// var channel = dispatcher.subscribe({channel: 'channel_name', foo: 'bar'});

// bind to a channel event
channel.bind('posts_arrived', function(data) {
  var elementTemplate = _.template($('#textList').html());
  $("#text").append(elementTemplate({item: data.text}));
});

$(function(){
  $("#submit").click(function(e){
    $.ajax({
      url: "/posts",
      type: "post",
      data: "post[text]="+$('#stext').val()
    });
  });
});
