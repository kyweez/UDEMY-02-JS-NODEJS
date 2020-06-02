/**
 * Dans cet exercice, j'aimerai que vous me créiez une fonction somme qui calculera la somme des nombres en partant de 1 jusqu'au nombre que nous lui donnerons en paramètres.
 * Par exemple, si je donne 5 en paramètres, alors ma fonction devra me calculer 5 + 4 + 3 + 2 + 1. Notre fonction devra donc nous retourner 15.
 * Bon courage, et amusez-vous bien !
 */

/**
 * Recursive function.
 * @param int number 
 */
function addition(number) {
    let result = number;
    if (number > 0)
        result += addition(number - 1);
    return (result);
}

console.log(addition(5));