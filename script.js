$(document).ready(function(){

    var currentDay = $("#currentDay");

    function getCurrentDay(){
        currentDay = moment().format('dddd, MMMM Do');
        $("#currentDay").text(currentDay);
    }

    getCurrentDay();


    function hourUpdater(){
        var currentHour = moment().hours();
        $(".row").each(function () {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            if (blockHour < currentHour) {
                $(this).addClass("past");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    hourUpdater();


});

