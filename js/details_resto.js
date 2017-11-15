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
        if (summary != "") {
            document.getElementById("summary").innerHTML += summary;

        } else {

            document.getElementById("summary").innerHTML += "Nice Restaurant";
        }

        var br ="<br/>";
        var desc = data.response.venue.description;
        if (desc != undefined) {
            document.getElementById("description").innerHTML += desc;

        } else {
            document.getElementById("description").innerHTML += "One of the joys of traveling is eating the local food. This is especially true when visiting Mauritius and discovering the large selection of restaurants, cuisines and the delicacies of Mauritius."+br+br+"So enjoy, and bon appetit :-)";
        }

        var checkin = data.response.venue.stats.checkinsCount;
        document.getElementById("checkin").innerHTML += checkin;
        if (checkin != "") {
            document.getElementById("checkin").innerHTML += checkin;

        } else {

            document.getElementById("checkin").innerHTML += "Not Available";
        }

        var price = data.response.venue.price.message;
        document.getElementById("price").innerHTML += price;

        var num_comment = data.response.venue.tips.count;
        document.getElementById("num_of_comments").innerHTML += num_comment + ' Comments';

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

        if ((data.response.venue.attributes) != undefined){


            if ((data.response.venue.attributes.groups[1].items[0].displayValue) != undefined){

                var reservation = data.response.venue.attributes.groups[1].items[0].displayValue;
                document.getElementById("table-reservation").innerHTML += '<td>' + reservation + '</td>';
            }else{

                document.getElementById("table-reservation").innerHTML += '<td>Not Available</td>';
            }

            if ((data.response.venue.attributes.groups[2].items[0].displayValue) != undefined){

                var payment = data.response.venue.attributes.groups[2].items[0].displayValue;
                document.getElementById("table-payment").innerHTML += '<td>' + payment + '</td>';
            }else{

                document.getElementById("table-payment").innerHTML += '<td>Not Available</td>';
            }

            if ((data.response.venue.attributes.groups[3].items[0].displayName) != undefined){

                var settings = data.response.venue.attributes.groups[3].items[0].displayName;
                document.getElementById("table-settings").innerHTML += '<td>' + settings + '</td>';
            }else{

                document.getElementById("table-settings").innerHTML += '<td>Not Available</td>';
            }

        }else{

            document.getElementById("table-reservation").innerHTML += '<th>Not Available</th>';
            document.getElementById("table-payment").innerHTML += '<td>Not Available</td>';
            document.getElementById("table-settings").innerHTML += '<td>Not Available</td>';
        }


    });

});