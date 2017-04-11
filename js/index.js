$(document).ready(function(){
  $("#unitc").hide();
  var tempF = 0;
  
  /*GET GEO LOCATION*/
  $.get("http://ipinfo.io", function(data) {
    $("#city").html(data.city + ", " + data.region);
     var city = data.city;
     var url = "http://api.openweathermap.org/data/2.5/weather?APPID=5ef56c5a14ea4afc0712772805281c6e&units=imperial&q="+ city;
     asy(url);
  }, "jsonp");
 
  /*GET WEATHER DATA*/
  function asy(url){
  $.getJSON(url, function(response){
    $("#descript").text(response.weather[0].description);
    tempF = Math.round(response.main.temp);
    $("#temp").text(tempF);
    var icon= "url('http://openweathermap.org/img/w/"+ response.weather[0].icon + ".png')";
    $(".icon").css("background-image", icon);
    $("#unitf").on("click", function(){
       $("#unitc").show();
       $("#unitf").hide();
       var c = Math.round((tempF - 32)/1.8);
       $("#temp").text(c);  
    });
    $("#unitc").on("click", function(){
      $("#unitf").show();
      $("#unitc").hide();
      $("#temp").text(tempF);
    });
 
  });
  }//asy function over
  /*GET LOCAL TIME */
   var now = new Date();
   $(".time").text( now.getHours() + ":" + now.getMinutes() );
  
 /*BACKGROUND CHANGE ACCORDING TO TEMP*/   
  function randomN(min , max){
      return Math.floor(Math.random()* (max-min+1)) + min;
   } 
  var hue;
  if( tempF > -20 && tempF <= 32){
      // < 0deg green-blue
       hue = randomN(163, 230) ;
    } else if( tempF > 32 &&  tempF <= 77){
       //< 20deg warm  yellow-green
       hue = randomN(57,98);
    } else if( tempF >78 &&  tempF < 100){
      //hot red-orange;"
       hue = randomN(0,40);
    }else {
      //default blue
      hue = 176;
    }
    var hue1 = hue - 10;
    var hue2 = hue + 10;
   //background:linear-gradient(141deg, hsl(176, 85%, 39%) 0%, hsl(186, 75%, 49%) 51%, hsl(196,80%,59%) 75%)
  var bgColor = "linear-gradient(141deg, hsl(" + hue1 + ",85%, 39%) 0%, hsl(" + hue   + ", 75%, 49%) 51%, hsl(" + hue2 + ", 80%, 59%) 75%)";
 var prefix=['-webkit-','-ms-','-moz-','-o-',''];
     for(var i=0; i< prefix.length; i++){
       $('.container').css(prefix[i] + 'background', bgColor)
     }
    
});