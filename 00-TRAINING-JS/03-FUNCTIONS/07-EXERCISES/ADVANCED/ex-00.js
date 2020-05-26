/***
 * Dans cet exercice, je vous propose de réutiliser tout ce que nous avons vu jusqu'à maintenant.
 * Si vous le réussissez, vous pourrez définitivement valider toutes les notions que nous avons déjà vu ensemble !
 * 
 * Voici ce que nous allons faire : un calculateur d'IMC !
 *      - Nous allons récupérer deux valeurs grâce à notre utilisateur : poids et taille, qui seront respectivement associées au poids et à la taille de notre utilisateur. 
 *        Vous pouvez demander à vos utilisateurs leur taille en centimètres ou en mètres. Dans tous les cas, vous devrez convertir cette taille en mètres pour calculer son IMC.
 *      - Il faudra ensuite passer ces valeurs à notre fonction, grâce à ses paramètres. J'insiste sur ce point.
 *      - Dans cette fonction calculerIMC nous aurons une formule mathématique, que je vais vous donner car il n'y a pas d'intérêt à la chercher :
 * 
 * Notez bien que le poids doit être en kg, et la taille en mètres. Donc, par exemple : 53kg et 1.50m.
 * Ici, vous avez le choix : faire le grand saut et essayer d'écrire cette équation par vous-même, ou alors, vous pouvez aller sur ce lien dans lequel je vous ai préparé quelques indices pour pouvoir mettre au carré un nombre (ici la taille).
 * Enfin, l'objectif pour notre fonction sera de nous retourner ce résultat afin que nous puissions l'afficher à notre utilisateur, directement via une boîte de dialogue en dehors de notre fonction.
 */

let weight = Number(prompt(`Veuillez saisir votre masse en kg`));
let height = Number(prompt(`Veuillez saisir votre taille en cm`) / 100);

function imcCalculator(height, weight) {
    return (weight / Math.pow(height, 2));
}

alert(`Votre IMC est de : ${Math.round(imcCalculator(height, weight))}`);