$(document).ready(function () {

    $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    }

    var id = (decodeURIComponent($.urlParam('id')));


    $.getJSON('https://api.foursquare.com/v2/venues/' + id + '?client_id=34PUIGBQZRB5WPOZW5YZKRWI4OMYL4VCBSUTCLIP20J3LFXH&client_secret=SZHKUKYCQ1SUNPBFR1UBQQAUGZXEMHFXG3Y3ZVXQ3I5B34WH&v=20171113', function (data) {

        var id1 = data.response.venue.id;

        var lat = data.response.venue.location.lat;
        var lon = data.response.venue.location.lng;

        document.getElementById("maps").innerHTML += '<a href="map.html?lat=' + lat + '&lon=' + lon + '" rel="external">Get Location on Map<i class="fa fa-map-marker" aria-hidden="true"></i></a>';

        var name = data.response.venue.name;
        document.getElementById("name").innerHTML += name;

        var address = data.response.venue.location.formattedAddress[0];
        document.getElementById("address").innerHTML += address;

        var category = data.response.venue.categories[0].name;
        document.getElementById("category").innerHTML += category;

        var pic1 = data.response.venue.bestPhoto.prefix;
        var pic2 = data.response.venue.bestPhoto.suffix.substr(1);
        var img = pic1 + "1600x800/" + pic2;

        document.getElementById("img").innerHTML += '<img class="details-img" src="' + img + '" alt=" " />';

        var email = data.response.venue.url;
        if (email != undefined) {

            document.getElementById("email").innerHTML += email;

        } else {

            document.getElementById("email").innerHTML += "admin@mtp.com";
        }

        var phone = data.response.venue.contact.formattedPhone;
        if (phone != undefined) {

            document.getElementById("phone").innerHTML += phone;

        } else {

            document.getElementById("phone").innerHTML += "4131234";
        }


        var rating = data.response.venue.rating;
        if (rating != undefined) {

            document.getElementById("rating").innerHTML += rating;

        } else {

            document.getElementById("rating").innerHTML += "Not Available";
        }

        var summary = data.response.venue.listed.groups[0].items[0].description;
        if (summary !== "") {
            document.getElementById("summary").innerHTML += summary;

        } else {

            document.getElementById("summary").innerHTML += "Wonderful Place";
        }

        var desc = data.response.venue.description;
        if (desc != undefined) {
            document.getElementById("description").innerHTML += desc;

        } else {
            document.getElementById("description").innerHTML += "This hotel has a very good reputation in Mauritius. It has a lot of amenities, from which tourists can benefit from including: a spa, gym, bar and other. It's location makes the hotel very peaceful. Staffs employed are very friendly and strives for customer satisfaction.This magnificent hotel is uniquely modern and provides the ultimate escape for discerning guests seeking a blissful haven with equal measures of relaxation and activity";
        }


        var checkin = data.response.venue.stats.checkinsCount;
        document.getElementById("checkin").innerHTML += checkin;
        if (checkin !== "") {
            document.getElementById("checkin").innerHTML += checkin;

        } else {

            document.getElementById("checkin").innerHTML += "Not Available";
        }

        document.getElementById("price").innerHTML += "Contact us for more details.";

        for (var i = 0; i < Object.keys(data.response.venue.tips.groups[0].items).length; i++) {

            var comments = data.response.venue.tips.groups[0].items[i].text;
            var user_fname = data.response.venue.tips.groups[0].items[i].user.firstName;
            var user_lname = data.response.venue.tips.groups[0].items[i].user.lastName;
            var pic_u1 = data.response.venue.tips.groups[0].items[i].user.photo.prefix;
            var pic_u2 = data.response.venue.tips.groups[0].items[i].user.photo.suffix.substr(1);
            var img_user = pic_u1 + "40x40/" + pic_u2;

            if(user_lname == undefined){
                var user_lname=" ";
                document.getElementById("comments_users").innerHTML += '<div class="media"><div class="media-left"><img src="'+img_user+'"></div><div class="media-body"><h4 class="media-heading user_name">'+user_fname+''+' '+''+user_lname+'</h4><p>'+comments+'</p></div></div>';
            }else{

                document.getElementById("comments_users").innerHTML += '<div class="media"><div class="media-left"><img src="'+img_user+'"></div><div class="media-body"><h4 class="media-heading user_name">'+user_fname+''+' '+''+user_lname+'</h4><p>'+comments+'</p></div></div>';
            }
        }

        var num_comment =data.response.venue.tips.count;
        document.getElementById("num_of_comments").innerHTML += num_comment+' Comments';
    
        if ((data.response.venue.popular) != undefined){
            for (var j = 0; j < Object.keys(data.response.venue.popular.timeframes).length-1; j++) {
                
                var numd = data.response.venue.popular.timeframes[j].days;
                var time = data.response.venue.popular.timeframes[j].open[0].renderedTime;

                if ((data.response.venue.popular.timeframes[j].open[1]) != undefined){

                    var time1 = data.response.venue.popular.timeframes[j].open[1].renderedTime;
                    document.getElementById("table-time2").innerHTML += '<td>' + time1 + '</td>';
                }else{

                    document.getElementById("table-time2").innerHTML += '<td>Not Available</td>';
                }
                
                document.getElementById("table-day").innerHTML += '<th>' + numd + '</th>';
                document.getElementById("table-time1").innerHTML += '<td>' + time + '</td>';
                

            }

        }else{

            document.getElementById("table-day").innerHTML += '<th>Not Available</th>';
            document.getElementById("table-time1").innerHTML += '<td>Not Available</td>';
            document.getElementById("table-time2").innerHTML += '<td>Not Available</td>';
        }

       
    

    });

});