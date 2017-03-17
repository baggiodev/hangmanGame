$(document).ready(function() {
    function pushit(x) {
        if (x.indexOf(userguess) == -1) {
            x.push(userguess);
        }
    }

    function reset() {
        userguess = 0;
        usersee = [];
        letters = [];
        wrongletters = [];
        wrong = 0;
        userseediv = "";
        randomnumber = (Math.floor(Math.random() * words.length));
        for (var i = 0; i < words[randomnumber].length; i++) {
            usersee.push("_");
            userseediv = userseediv + "_ "
            $("#usersee").html("<h1>" + userseediv + "</h1>");

        }
        $("#lettersused").html("<h2>" + letters + "</h2>");

        wincounter = 0;
        $("#wrongcounter").attr("src", "assets/images/hangwrong0.gif")
    }
    var words = ["elephant", "tiger", "zebra", "lion", "giraffe", "leopard", "rhino", "cheetah", "buffalo", "hippopotamus", "crocodile"];
    var userguess = "";
    var userseediv = "";
    var usersee = [];
    var letters = [];
    var wrongletters = [];
    var wrong = 0;
    var randomnumber = (Math.floor(Math.random() * words.length));
    var wincounter = 0;
    var wins = 0;
    var rightletters = [];
    for (var i = 0; i < words[randomnumber].length; i++) {
        usersee.push("_");
        userseediv = usersee.join(" ");
        $("#usersee").html("<h1>" + userseediv + "</h1>");
    }

    document.onkeyup = function(event) {
        var checkwrong = true;
        // Captures the key press, converts it to lowercase, and saves it to a variable.
        userguess = String.fromCharCode(event.keyCode).toLowerCase();
        if (letters.indexOf(userguess) >= 0) {} else {

            if (event.keyCode >= 65 && event.keyCode <= 90 && wrong < 6 && wincounter < words[randomnumber].length) {
                for (var i = 0; i < words[randomnumber].length; i++) {
                    if (words[randomnumber][i] === userguess) {
                        usersee[i] = userguess;
                        userseediv = usersee.join(" ");
                        checkwrong = false;
                        wincounter++;
                        pushit(letters);
                    } else {
                        pushit(letters);
                    }
                }
                if (checkwrong) {
                    if (wrongletters.indexOf(userguess) == -1) {
                        wrongletters.push(userguess);
                        wrong++
                    }
                }
                $("#wrongcounter").attr("src", "assets/images/hangwrong" + wrong + ".gif");
                if (wrong === 6) {
                    alert("Sorry you lose. Press reset for another word.")
                }
                if (words[randomnumber].length === wincounter) {
                    wins++;
                    alert("Yay you win! You've won " + wins + " times.  Pres reset for another word.");
                    console.log(":)");
                }
                $("#usersee").html("<h1>" + userseediv + "</h1>");
                $("#lettersused").html("<h2>" + letters + "</h2>");
            }
        }

    }
    $("#reset").on("click", function() {
        reset();
    })
});