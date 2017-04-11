## Synopsis

Local Weather App shows the weather in user’s current location. The icon and background color will change depending on the weather or the temperature. You can toggle between Fahrenheit and Celsius by clicking the acronym(F/C). 

---
## Preview

![Project Preview](https://github.com/lizzyQ/Local-Weather-App-/blob/master/preview.png?raw=true)

[*Demo*](http://codepen.io/lizzyQ/full/qqeLWM/). 


***
## Logic

##### Get the location.

Initial attempt was to use the HTML5 Geolocation which need permission from the user. I found this method is not simple enough. The user may want no-effort straight forward information which function like a widget. I end up using IP address to locate the current city of the user. 

API (IP Address): [http://ipinfo.io/](http://ipinfo.io/)


##### Get the weather information

API: [https://openweathermap.org/](https://openweathermap.org/)

##### Change background color
 
The changing of the gradient background color was based on the temprature. The higher the temperature, the warmer the background color. Accomplished the effect by utilizing CSS3 HSL color notation with javascript.

