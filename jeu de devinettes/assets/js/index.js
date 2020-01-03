/*1. Le systeme genere un nombre aléatoire compris entre 1 et 10
2. Le joueur a droit à 3 tentatives pour deviner ce nombre
3. S'il trouve le nombre avant les 3 tentatives, il est déclaré gagnant
4. Sinon il est déclaré perdant
5. Il a la possibilité de toujours refaire une nouvelle partie*/

var num = Math.floor(Math.random() * 10) + 1;

var NbTries = 0;

function FindNb() {

        var choice = document.form.guess.value;

        var message = document.getElementById("message");

        NbTries++;

        if (choice < num) {

                message.innerHTML = " Wrong, the number is bigger. You have " + (3 - NbTries) + " chances left";

        }

        if (choice > num) {

                message.innerHTML = " Wrong, the number is smaller. You have " + (3 - NbTries) + " chances left";

        }

        if (choice == num) {

                message.style.color = "#00FF00"
                
                message.innerHTML ="Correct ! You have found in " + NbTries + " tries.";

        }

        if (NbTries == 3) {

                message.innerHTML = "Sorry, it's over. The correct number was : " + num +". Click on Restart to try again.";
        
        }

}

document.getElementById("restart").addEventListener("click", function() {

        num =  Math.floor(Math.random() * 10) + 1;
        
});
