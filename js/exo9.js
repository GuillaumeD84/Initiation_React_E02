// Paramètres du reste (Rest parameters or Spread operator)

/*
 * Faire la moyenne des nombres passées en argument
 * quelque soit le nombre d'arguments !
 */

// On ajoute un protoype qui fait la somme des nombres d'un 'array'
Array.prototype.sum = function() {
  return this.reduce(function(cumul, item) {
    return cumul + item;
  }, 0);
};

// Sans prototype
function average(...grades) {
  let sum = grades.reduce((cumul, item) => cumul + item, 0);

  return sum / grades.length;
}

console.log(average(2, 4, 3)); // Retourne 3


// Avec protoype + fonction fléchée
var averageBis = (...grades) => grades.sum() / grades.length;

console.log(averageBis(2, 4, 3, 15)); // Retourne 6
