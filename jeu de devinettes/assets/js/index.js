/*1. Le systeme genere un nombre aléatoire compris entre 1 et 10
2. Le joueur a droit à 3 tentatives pour deviner ce nombre
3. S'il trouve le nombre avant les 3 tentatives, il est déclaré gagnant
4. Sinon il est déclaré perdant
5. Il a la possibilité de toujours refaire une nouvelle partie*/

var num = Math.floor(Math.random() * 10) + 1;

var NbEssais = 0;

function Devine() {

        var choisi = document.form.guess.value;

        var message = document.getElementById("message");

        NbEssais++;

        status = "Nombre d'essais : " + NbEssais;

        if (choisi < num) {

                message.innerHTML = " No, the number is bigger. You have " + (3 - NbEssais) + " chances left";

        }

        if (choisi > num) {

                message.innerHTML = " No, the number is smaller. You have " + (3 - NbEssais) + " chances left";

        }

        if (choisi == num) {

                message.innerHTML = "Correct ! You have found in " + NbEssais + " tries.";

                location.reload();

        }

        if (NbEssais == 3) {

                message.innerHTML = "Sorry, it's over. The correct number was : " + num;
        
                location.reload();
        
        }

}
