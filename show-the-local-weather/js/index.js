var lat = 0;
var long = 0;
var fcc = "";
var tempC = 0;
var tempF = 0;
  

  if (navigator.geolocation) {
    
    navigator.geolocation.getCurrentPosition(function(position){
      
      lat = position.coords.latitude; 
      long = position.coords.longitude;
      
      fcc = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long;
      
      $.ajax({
        type:'GET',
        url:fcc,
        success: function(data){
          
          //$("#load").html(JSON.stringify(data) + '<br>');
          
          tempC = Math.floor(data.main.temp);
          
          $("#loc").html(data.name + ", " + data.sys.country);
          $("#temp").html(tempC + " <sup>o</sup>C");
          $("#desc").html(data.weather[0].description.toUpperCase());
          $("#icon").attr("src", data.weather[0].icon);
        }
      });
      
      var state = 'c';
      
      $("#temp").click(function(){
        
        if(state === 'c'){
          $("#temp").html(Math.floor(tempC * 1.8 + 32) + " <sup>o</sup>F");
          state = 'f';
        }
        else if(state === 'f'){
          $("#temp").html(tempC + " <sup>o</sup>C");
          state = 'c';
        }
      });
    });
  }

  $(document).ajaxComplete(function(){
    $(".text-center").css("display", "block");
    $("#load").fadeOut('fast');
  });