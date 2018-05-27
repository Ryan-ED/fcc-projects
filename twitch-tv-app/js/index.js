var users = ["ESL_SC2", "OgamingSC2", "Monstercat", "StreamerHouse", "freecodecamp", "Nianfo", "cpZebra"];
var url = "";
var streams = [];

//This function takes a username and finds the stream status for the user passed in
function getStreamData(username) {  

  url = "https://wind-bow.gomix.me/twitch-api/streams/" + username + "?callback=?";
  
  $.ajax({
    url: url,
    dataType: "jsonp",
    success: function(data){
      //Adds the user object into an array
      streams.push(data);
      
      //When the length of the array of usernames matches the length of the array of user objects, run *showStream* function
      if(streams.length === users.length){
        //Runs the showStreams function for every object in the streams array
        streams.forEach(showStreams);
      };
    }
  });
}

//Runs the AJAX function for each user in the *users* array
users.forEach(getStreamData);

//This function takes a user object as an argument and reads through the data to find the username, current stream and online status
//And then appends it into an HTML paragraph
function showStreams(item){
  
  var stream = item.stream;
  
  if(stream === null){
    
    var channelUrl = item._links.channel;
    var channelName = channelUrl.substring(channelUrl.lastIndexOf("/") + 1);
    
    $.ajax({
    url: "https://wind-bow.gomix.me/twitch-api/channels/" + channelName,
    dataType: "jsonp",
    success: function(channel){
      
        $("tbody").append("<tr class='hoverable'><td><a  class='valign-wrapper' href='" + channel.url 
                      + "' target='_blank' title='Click to go to Twitch profile'><img class='hide-on-small-only circle responsive-img' src='" 
                      + channel.logo + "' alt='Profile Picture'>  " + channel.display_name 
                      + "</a></td><td><i class='offline fa fa-circle'></i> Offline</td><td>No Stream :(</td></tr>");
      }
    });
  }
  
  else {
    
    $("tbody").append("<tr class='hoverable'><td><a  class='valign-wrapper' href='" + stream.channel.url 
                      + "' target='_blank' title='Click to go to Twitch profile'><img class='hide-on-small-only circle responsive-img' src='" 
                      + stream.channel.logo + "' alt='Profile Picture'>  " + stream.channel.display_name 
                      + "</a></td><td><i class='online fa fa-circle'></i> Online</td><td>" + stream.game + "</td></tr>");
  }
}