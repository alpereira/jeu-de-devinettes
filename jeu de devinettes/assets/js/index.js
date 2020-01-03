/*1. Le systeme genere un nombre aléatoire compris entre 1 et 10
2. Le joueur a droit à 3 tentatives pour deviner ce nombre
3. S'il trouve le nombre avant les 3 tentatives, il est déclaré gagnant
4. Sinon il est déclaré perdant
5. Il a la possibilité de toujours refaire une nouvelle partie*/

console.log("Bienvenue dans ce jeu de devinette !");

var num = Math.floor(Math.random() * 10) + 1;

var NbEssais = 0;

function Devine() {

        var choisi = document.form1.devine1.value;

        NbEssais++;

        status = "Nombre d'essais : " + NbEssais;

        if (choisi < num) {

                window.alert("Non, le nombre est plus grand.");

                window.alert("C'est votre " + (NbEssais + 1) + "ème essai");

        }

        if (choisi > num) {

                window.alert("Non, le nombre est plus petit.");

                window.alert("C'est votre " + (NbEssais + 1) + "ème essai");

        }

        if (choisi == num) {

                window.alert("Correct ! Vous avez trouvé en " + NbEssais + " essais.");

                location.reload();

        }

        if (NbEssais == 3) {

                window.alert("Désolé, c'est fini. Le nombre correct était : " + num);
        
                location.reload();
        
        }

}

