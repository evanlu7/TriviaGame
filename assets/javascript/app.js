var number = 45;
var correct = 0;
var intervalId;
document.getElementById("quiz").style.visibility = "hidden";
$("#start").on("click", run);

function run() {
    intervalId = setInterval(decrement, 1000);
    document.getElementById("quiz").style.visibility = "visible";
}

function decrement() {
    number--;
    $("#show-number").html("<h2>" + number + " seconds left</h2>");

    if (number === 0) {
        stop();
        check()
        document.getElementById("finished").innerHTML = "<h2>You got " + correct + " correct </h2>";
    }
}

function stop() {
    clearInterval(intervalId);
    document.getElementById("quiz").style.visibility = "hidden";
}

function check() {
    stop();
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;


    if (question1 == "answer4") {
        correct++;
    }

    if (question2 == "answer2") {
        correct++;
    }

    if (question3 == "answer1") {
        correct++;
    }

    if (question4 == "answer1") {
        correct++;
    }

    if (question5 == "answer4") {
        correct++;
    }


    document.getElementById("submit").style.visibility = "visible";
    document.getElementById("how-many-correct").innerHTML = correct + " correct.";

}