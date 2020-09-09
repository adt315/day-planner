
var currentDay = $("#currentDay");


function getCurrentDay() {
    currentDay = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDay);
}

getCurrentDay ();