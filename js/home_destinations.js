$(document).ready(function(){
	$.getJSON('https://api.foursquare.com/v2/venues/explore?near=mauritius&categoryId=4bf58dd8d48988d1fa931735&venuePhotos=1&client_id=34PUIGBQZRB5WPOZW5YZKRWI4OMYL4VCBSUTCLIP20J3LFXH&client_secret=SZHKUKYCQ1SUNPBFR1UBQQAUGZXEMHFXG3Y3ZVXQ3I5B34WH&v=20171113', function(data) {

		for (var i = 0; i < Object.keys(data.response.groups[0].items).length; i++) {
			
			var id_hotel = data.response.groups[0].items[i].venue.id;
			var name_hotel = data.response.groups[0].items[i].venue.name;
			var address_hotel = data.response.groups[0].items[i].venue.location.formattedAddress[0];
			var pic1_hotel = data.response.groups[0].items[i].venue.featuredPhotos.items[0].prefix;
			var pic2_hotel = data.response.groups[0].items[i].venue.featuredPhotos.items[0].suffix.substr(1);
			var img_hotel = pic1_hotel+"1600x800/"+pic2_hotel;

			if (i==0){
				document.getElementById("api-hotel").innerHTML += '<div class="item active"><a href="details_hotels.html?id='+id_hotel+'" rel="external"><img src="'+img_hotel+'" class="carousel-image"><div class="carousel-caption"><h3>'+name_hotel+'</h3><p>'+address_hotel+'</p></div></a></div>';
			}else if (i !== 28){
				document.getElementById("api-hotel").innerHTML += '<div class="item"><a href="details_hotels.html?id='+id_hotel+'" rel="external"><img src="'+img_hotel+'" class="carousel-image"><div class="carousel-caption"><h3>'+name_hotel+'</h3><p>'+address_hotel+'</p></div></a></div>';
			}
			
		};

	});


	$.getJSON('https://api.foursquare.com/v2/venues/explore?near=mauritius&categoryId=4d4b7105d754a06374d81259&venuePhotos=1&client_id=34PUIGBQZRB5WPOZW5YZKRWI4OMYL4VCBSUTCLIP20J3LFXH&client_secret=SZHKUKYCQ1SUNPBFR1UBQQAUGZXEMHFXG3Y3ZVXQ3I5B34WH&v=20171113', function(data) {

		for (var j = 0; j < Object.keys(data.response.groups[0].items).length; j++) {

			var id_resto = data.response.groups[0].items[j].venue.id;
		
			var name_resto = data.response.groups[0].items[j].venue.name;
			var address_resto = data.response.groups[0].items[j].venue.location.formattedAddress[0];
			var pic1_resto = data.response.groups[0].items[j].venue.featuredPhotos.items[0].prefix;
			var pic2_resto = data.response.groups[0].items[j].venue.featuredPhotos.items[0].suffix.substr(1);
			var img_resto = pic1_resto+"1600x800/"+pic2_resto;

			if (j==0){
				document.getElementById("api-resto").innerHTML += '<div class="item active"><a href="details_resto.html?id='+id_resto+'" rel="external"><img src="'+img_resto+'" class="carousel-image"><div class="carousel-caption"><h3>'+name_resto+'</h3><p>'+address_resto+'</p></div></a></div>';
			}else{
				document.getElementById("api-resto").innerHTML += '<div class="item"><a href="details_resto.html?id='+id_resto+'" rel="external"><img src="'+img_resto+'" class="carousel-image"><div class="carousel-caption"><h3>'+name_resto+'</h3><p>'+address_resto+'</p></div></a></div>';
			}
			
		};

	});

	$.getJSON('https://api.foursquare.com/v2/venues/explore?near=mauritius&categoryId=4bf58dd8d48988d165941735&venuePhotos=1&client_id=34PUIGBQZRB5WPOZW5YZKRWI4OMYL4VCBSUTCLIP20J3LFXH&client_secret=SZHKUKYCQ1SUNPBFR1UBQQAUGZXEMHFXG3Y3ZVXQ3I5B34WH&v=201711136', function(data) {

		for (var k = 0; k < Object.keys(data.response.groups[0].items).length; k++) {

			var id_attract = data.response.groups[0].items[k].venue.id;
		
			var name_attract = data.response.groups[0].items[k].venue.name;
			var address_attract = data.response.groups[0].items[k].venue.location.formattedAddress[0];
			var pic1_attract = data.response.groups[0].items[k].venue.featuredPhotos.items[0].prefix;
			var pic2_attract = data.response.groups[0].items[k].venue.featuredPhotos.items[0].suffix.substr(1);
			var img_attract = pic1_attract+"1600x800/"+pic2_attract;

			if (k==0){
				document.getElementById("api-attract").innerHTML += '<div class="item active"><a href="details_attract.html?id='+id_attract+'" rel="external"><img src="'+img_attract+'" class="carousel-image"><div class="carousel-caption"><h3>'+name_attract+'</h3><p>'+address_attract+'</p></div></a></div>';
			}else{
				document.getElementById("api-attract").innerHTML += '<div class="item"><a href="details_attract.html?id='+id_attract+'" rel="external"><img src="'+img_attract+'" class="carousel-image"><div class="carousel-caption"><h3>'+name_attract+'</h3><p>'+address_attract+'</p></div></a></div>';
			}
			
		};

	});

});