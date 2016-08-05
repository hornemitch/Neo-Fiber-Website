/* Global sorting variables */
var type = "all";;
/* Global sorting variables */

/* Website init */
$(document).ready(function(){

    /* Bootstrap tooltip init */
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body',
        trigger: "hover"
    });
    /* Bootstrap tooltip init */

    /* Smooth scroll init */
    $(".nav-link").smoothScroll({
        speed: 800
    });
    /* Smooth scroll init */
});
/* Website init */

/* Navigation control */
$(".nav-control").on("click", function() {
    operateNav();
});
$(".nav-link").on("click", function() {
    operateNav();
});

/* Navigation open/close function */
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
/* Navigation open/close function */
/* Navigation control */

/* Terminology control */
$(".terminology-button").on("click", function(){
    operateTerminology();
});
$(".close-terminology").on("click", function(){
    operateTerminology();
});

/* Terminology open/close function */
function operateTerminology(){
    var term = $(".terminology-cover");

    if(term.hasClass("closed")) {
        term.removeClass("closed");
        setTimeout(function () {
            term.removeClass("slideOutRight");
            term.addClass("slideInRight");
        }, 500);
    } else {
        term.addClass("closed");
        setTimeout(function(){
            term.removeClass("slideInRight");
            term.addClass("slideOutRight");
        },500);
    }
}
/* Terminology open/close function */
/* Terminology control */

/* Packages control */
$(".package-button").on("click", function(){
    operatePackages();
});
$(".close-packages").on("click", function(){
    operatePackages();
});

/* Packages open/close function */
function operatePackages(){
    var packages = $(".packages-sort-cover");
    var container = $(".packages");

    if(!container.hasClass("closed")){
        container.slick("slickUnfilter");
        container.slick("unslick");
        container.addClass("closed");
    }

    if(packages.hasClass("closed")){
        packages.removeClass("closed");
        setTimeout(function(){
            packages.removeClass("slideOutRight");
            packages.addClass("slideInRight");
        },500);
    } else {
        packages.addClass("closed");
        setTimeout(function(){
            packages.removeClass("slideInRight");
            packages.addClass("slideOutRight");
        },500);
    }
}
/* Packages open/close function */
/* Packages control */

/* Type selection functions */
$(".type-button").on("click", function(){
    type = $(this).attr("value");
    var activeButton = $(".type-button.active");
    var shapeButton = $(".line-button.unshaped");

    if(activeButton){
        activeButton.removeClass("active");
        activeButton.addClass("package-sort-button");
    }
    if(type == "home"){
        if(shapeButton.prop("disabled") == false){
            shapeButton.prop("disabled", true);
            shapeButton.addClass("disabled");
        }
    } else {
        if(shapeButton.prop("disabled") == true){
            shapeButton.prop("disabled", false);
            shapeButton.removeClass("disabled");
        }
    }

    $(this).removeClass("package-sort-button");
    $(this).addClass("active");
});
/* Type selection functions */

/* Show sorted packages control */
$(".package-sort-button-search").on("click", function(){
    showPackages();
});

/* Show sorted packages function */
function showPackages(){
    var container = $(".packages");
    if(type == "all"){
        operatePackages();
        container.removeClass("closed");
        container.slick({
            prevArrow: "<i class='fa fa-angle-left prev-button'><i/>",
            nextArrow: "<i class='fa fa-angle-right next-button'><i/>",
            speed: 500
        });
    } else if(type == "business"){
        operatePackages();
        container.removeClass("closed");
        container.slick({
            prevArrow: "<i class='fa fa-angle-left prev-button'><i/>",
            nextArrow: "<i class='fa fa-angle-right next-button'><i/>",
            speed: 500
        });
        container.slick("slickFilter", ".business");
    } else if(type == "home"){
        operatePackages();
        container.removeClass("closed");
        container.slick({
            prevArrow: "<i class='fa fa-angle-left prev-button'><i/>",
            nextArrow: "<i class='fa fa-angle-right next-button'><i/>",
            speed: 500
        });
        container.slick("slickFilter", ".home");
    }
}
/* Show sorted packages function */
/* Show sorted packages control */