$(document).ready(function() {

// Get current day and display at top of calendar
    var currentDay = $("#currentDay");

    function getCurrentDay() {
        currentDay = moment().format('dddd, MMMM Do');
        $("#currentDay").text(currentDay);
    }

    getCurrentDay();
    hourUpdater();
    showPlans();

// Color code timeblocks based on if they are in the past, present, or future
    function hourUpdater() {
        var currentHour = moment().hours();
        $(".row").each(function() {
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


// Save plan(s) in local storage

    var myPlans = [
    {
        hour: "9",
        plan: ""
    },
    {
        hour: "10",
        plan: ""
    },
    {
        hour: "11",
        plan: ""
    },
    {
        hour: "12",
        plan: ""
    },
    {
        hour: "13",
        plan: ""
    },
    {
        hour: "14",
        plan: ""
    },
    {
        hour: "15",
        plan: ""
    },
    {
        hour: "16",
        plan: ""
    },
    {
        hour: "17",
        plan: ""
    },
]

    function savePlans() {
        localStorage.setItem("myPlans", JSON.stringify(myPlans));
    }
        savePlans();
   
    function showPlans() {
    console.log(JSON.parse(localStorage.getItem("myPlans"))) 
        // myPlans.each(function() {
     }
    

    $(".saveBtn").on("click", function() {
        // fridgeMagnet.text($(this).attr("data-letter"));

        savePlans();
        showPlans();
    });


});

