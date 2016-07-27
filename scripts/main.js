function operateNav(){
    var nav = $("nav");

    if(nav.attr("class") == "nav-closed"){
        nav.removeClass("nav-closed");
        nav.addClass("nav-open");
    } else if (nav.attr("class") == "nav-open"){
        nav.removeClass("nav-open");
        nav.addClass("nav-closed");
    }
}