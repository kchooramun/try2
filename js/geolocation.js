
function onSuccess(position) {
    $("#latitude").val(position.coords.latitude);
    $("#longitude").val(position.coords.longitude);
    $("#accuracy").val(position.coords.accuracy);
    $("#timestamp").val(position.timestamp);

    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    
    $.getJSON('http://openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=b1b15e88fa797225412429c1c50c122a1', function(data) {

        var text = data.name;

        document.getElementById("place").innerHTML = text;   
        
        var text1 = data.main.temp;
        document.getElementById("temperature").innerHTML = text1;   
        
        var text2 = data.weather[0].description;
        document.getElementById("desc").innerHTML = text2;   
        
    });

    $.mobile.loading("hide");
};

function onError(error) {
    alert("Code: "    + error.code    + "\n" +
        "Message: " + error.message + "\n");
    $.mobile.loading("hide");
}


$(document).on('pagebeforecreate', function(){
    $.mobile.loading("show");
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});
