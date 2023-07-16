$(document).ready(function() {
    $('#toConference').click(function() {
        window.location.href = 'conference.html';
    });
});

function makeTimer() {
    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
    var endTime = new Date("28 February 2024 9:56:00 GMT+01:00");
    endTime = Date.parse(endTime) / 1000;

    var now = new Date();
    now = Date.parse(now) / 1000;

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );

    if (hours < "10") {
        hours = "0" + hours;
    }
    if (minutes < "10") {
        minutes = "0" + minutes;
    }
    if (seconds < "10") {
        seconds = "0" + seconds;
    }

    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
}

setInterval(function() {
    makeTimer();
}, 1000);


const joinForm = document.getElementById("joinForm");

if (joinForm) {
    joinForm.addEventListener("submit", function(e) {
        // $(".preloader").fadeIn(1000);

        const formData = new FormData(joinForm);
        e.preventDefault();
        var object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        var json = JSON.stringify(object);
        fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            })
            .then(async(response) => {
                let json = await response.json();
                console.log(json);

                if (response.status == 200) {} else {
                    console.log(response);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .then(function() {
                joinForm.reset();
                // $(".preloader").fadeOut(1000); // set duration in milliseconds
            });
    });
}

const paymentForm = document.getElementById("paymentForm");
if (paymentForm) {

    paymentForm.addEventListener("submit", function(e) {

        const formData = new FormData(paymentForm);
        e.preventDefault();
        var object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        var json = JSON.stringify(object);
        console.log(json);
        fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            })
            .then(async(response) => {
                let json = await response.json();
                console.log(json);

                if (response.status == 200) {} else {
                    console.log(response);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .then(function() {
                paymentForm.reset();
                // $(".preloader").fadeOut(1000); // set duration in milliseconds
            });
    });
}