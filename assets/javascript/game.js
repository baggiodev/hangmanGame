$(document).ready(function() {

    // CREATE THE MISSING CODE HERE. Your code should add content to the random-number div.
    // ...
    //   var word1 = ["e","l","e","p","h","a","n","t"];
    //   var userguess = "z"
    //   var lengtharray = word1.length;
    //   var test = [];
    //   var letters = [];
    //   var wrong = 0;
    //   var testindex
    //   var checkwrong = false;

    //   for (var i = 0; i < word1.length; i++) {
    //     test.push("_");
    //   }
    //   // console.log(test);
    //   for (var i = 0; i < word1.length; i++) {
    //     if(word1[i]===userguess){
    //       test[i] = userguess;
    //       if(letters.indexOf(userguess)==-1){
    //         letters.push(userguess);
    //     }
    //   }
    //     else{
    //       checkwrong = true;
    //       if(letters.indexOf(userguess)==-1){
    //       letters.push(userguess);
    //     }
    //   }
    // }
    // if(checkwrong){
    //   wrong++
    // }
    //   console.log(letters);
    //   console.log(test);
    //   console.log(wrong);
    //   // ...
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
    // console.log(randomnumber);
    // console.log(words[randomnumber]);
    // var checkwrong = true;
    // console.log(words[0][2]);
    for (var i = 0; i < words[randomnumber].length; i++) {
        usersee.push("_");
        userseediv = usersee.join(" ");
        $("#usersee").html("<h1>" + userseediv + "</h1>");
    }

    document.onkeyup = function(event) {
        var checkwrong = true;
        // Captures the key press, converts it to lowercase, and saves it to a variable.
        userguess = String.fromCharCode(event.keyCode).toLowerCase();
        // console.log(wincounter);
        if (letters.indexOf(userguess) >= 0) {} else {

            if (event.keyCode >= 65 && event.keyCode <= 90 && wrong < 6 && wincounter < words[randomnumber].length) {
                for (var i = 0; i < words[randomnumber].length; i++) {
                    if (words[randomnumber][i] === userguess) {
                        usersee[i] = userguess;
                        userseediv = usersee.join(" ");
                        checkwrong = false;
                        wincounter++;
                        // console.log(userseediv);
                        // if (letters.indexOf(userguess) == -1) {
                        //     letters.push(userguess);
                        // }
                        pushit(letters);
                    } else {
                        // if (letters.indexOf(userguess) == -1) {
                        //     letters.push(userguess);
                        // }
                        pushit(letters);
                    }
                }
                if (checkwrong) {
                    if (wrongletters.indexOf(userguess) == -1) {
                        wrongletters.push(userguess);
                        wrong++
                    }
                }
                // if (wrong === 1) {
                //     $("#wrongcounter").attr("src", "assets/images/hangwrong1.gif")
                // }
                // if (wrong === 2) {
                //     $("#wrongcounter").attr("src", "assets/images/hangwrong2.gif")
                // }
                // if (wrong === 3) {
                //     $("#wrongcounter").attr("src", "assets/images/hangwrong3.gif")
                // }
                // if (wrong === 4) {
                //     $("#wrongcounter").attr("src", "assets/images/hangwrong4.gif")
                // }
                // if (wrong === 5) {
                //     $("#wrongcounter").attr("src", "assets/images/hangwrong5.gif")
                // }
                // if (wrong === 6) {
                //     alert("Sorry you lose press reset to get a new word");
                //     $("#wrongcounter").attr("src", "assets/images/hangwrong6.gif")
                // }
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
                // console.log(wincounter);
                // console.log(userguess);
                // console.log(words);
                // console.log(letters);
                // console.log(usersee);
                // console.log(wrong);
            }
        }

    }
    $("#reset").on("click", function() {
        reset();
    })
});