var $result = $("#results");
var $load = $("load");

function wikiSearch(){
  $load.fadeIn("fast");
  $result.html("");
  var search = document.getElementById('keywords').value;
  
  var wiki = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + search + "&callback=wikiCallback";
  
  $.ajax({
    url: wiki,
    dataType: "jsonp",
    
    success: function(data){
      $load.fadeOut("slow");
      var list = data[1];
      var snippet = data[2];
      var link = data[3];
      var url = "http://en.wikipedia.org/wiki/"+ list[i];
      for (var i = 0; i < data[1].length; i++){
        $result.append("<div class='wiki-item'><a href='"+link[i]+"' target='_blank'><h3>"+list[i]+"</h3></a><p>"+snippet[i]+"</p></div>");
      }
    }
  });
  return false;
};

$("#btn").click(wikiSearch);
$("form").submit(wikiSearch);