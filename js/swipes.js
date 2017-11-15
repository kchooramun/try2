$(document).on('pagebeforecreate', function () {
    $.mobile.pageContainer.prepend(panelslide);
    $("#left-panel").panel().enhanceWithin();
    $("div[data-role='page']").bind("swiperight", function (e) {

        if ($(".ui-page-active").jqmData("panel") !== "open") {
            if (e.type === "swiperight") {
                $("#left-panel").panel("open");
            }
        }

        e.stopImmediatePropagation();

        return false;
    });

});

var panelslide = '<div data-role="panel" id="left-panel" data-display="push" data-position="left" data-theme="a"><ul data-role="listview"><li data-icon="delete"><a href="#" data-rel="close" class="ui-nodisc-icon" data-iconshadow="true">Close</a></li><li data-role="list-divider"></li><ul data-role="listview"><li><a href="index.html" rel="external">Home</a></li><li><a href="hotels.html" rel="external">Hotels</a></li><li><a href="resto.html" rel="external">Restaurants</a></li><li><a href="attracts.html" rel="external">Attractions</a></li><li><a href="forex.html" rel="external">Forex</a></li></ul><li data-role="collapsible" data-inset="false" data-icon="carat-r" class="ui-nodisc-icon" data-iconshadow="true"><h3>Users</h3><ul data-role="listview"><li><a href="register.html" rel="external">Profile</a></li><li><a href="favourites.html" rel="external">Favourites</a></li><li><a href="feedback.html" rel="external">App Feedback</a></li></ul></li></ul></div>';

$(document).ready(function () {
    $("div[id='myCarousel']").bind("swiperight", function (e) {
        $(this).carousel('prev');
        e.stopImmediatePropagation();
        return false;
    });
    $("div[id='myCarousel']").bind("swipeleft", function () {
        $(this).carousel('next');
        e.stopImmediatePropagation();
        return false;
    });

    $("div[id='myCarousel1']").bind("swiperight", function (e) {
        $(this).carousel('prev');
        e.stopImmediatePropagation();
        return false;
    });
    $("div[id='myCarousel1']").bind("swipeleft", function () {
        $(this).carousel('next');
        e.stopImmediatePropagation();
        return false;
    });

    $("div[id='myCarousel2']").bind("swiperight", function (e) {
        $(this).carousel('prev');
        e.stopImmediatePropagation();
        return false;
    });
    $("div[id='myCarousel2']").bind("swipeleft", function () {
        $(this).carousel('next');
        e.stopImmediatePropagation();
        return false;
    });

    $("div[id='table-time']").bind("swipeleft", function () {
        e.stopImmediatePropagation();
        return false;
    });

    $("table[id='table-time']").bind("swipeleft", function () {
        e.stopImmediatePropagation();
        return false;
    });
});