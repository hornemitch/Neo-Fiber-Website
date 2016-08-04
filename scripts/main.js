$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        trigger: "hover"
    });
    var type = "all",
        line = "all",
        cap  = "all";

});

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

function openTerminology(){
    var term = $(".terminology-cover");

    term.removeClass("closed");
    setTimeout(function(){
        term.removeClass("slideOutRight");
        term.addClass("slideInRight");
    },1200);
}
function closeTerminology(){
    var term = $(".terminology-cover");

    term.addClass("closed");
    setTimeout(function(){
        term.removeClass("slideInRight");
        term.addClass("slideOutRight");
    },500);
}

function openPackages(){
    var packages = $(".packages-sort-cover");

    packages.removeClass("closed");
    setTimeout(function(){
        packages.removeClass("slideOutRight");
        packages.addClass("slideInRight");
    },1200);
}
function closePackages(){
    var packages = $(".packages-sort-cover");

    packages.addClass("closed");
    setTimeout(function(){
        packages.removeClass("slideInRight");
        packages.addClass("slideOutRight");
    },500);
}

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