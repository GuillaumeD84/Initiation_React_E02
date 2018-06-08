// Les prototypes

/*
  Exemple de prototype

  Array.prototype.hello = function() {
    console.log('Hello, je suis un tableau et je contiens ' + this.length + ' éléments !');
  };

  // Hello, je suis un tableau et je contiens 3 éléments !
  [0, 1, 2].hello();
 */

/*
  Enrichir le type 'Array' avec les méthodes suivantes :
    - sum() ===> renvoie la somme de tous les éléments
    - product() ===> renvoie le produit (multiplication) de tous les éléments
    - divide(x) ===> renvoie un array, avec chaque éléments de l'array divisé par 'x'
 */

// sum()
// Méthode classique
Array.prototype.sum = function() {
  return this.reduce(function(cumul, item) {
    return cumul + item;
  }, 0);
};

// Retourne 13
console.log([2, 5, 4, 2].sum());


// Fonction fléchée
/* On ne peut pas convertir la fonction() en fléchée car 'this' contient
 * le contexte précdent qui serait 'window' au lieu de notre 'array'
 * et donc erreur ici
 */
Array.prototype.sumBis = function() {
  return this.reduce((cumul, item) => cumul + item, 0);
};

// Retourne 13
console.log([2, 5, 4, 2].sumBis());



// product()
Array.prototype.product = function() {
  return this.reduce((cumul, item) => cumul * item, 1);
};

// Retourne 80
console.log([2, 5, 4, 2].product());


Array.prototype.divide = function(divisor) {
  return this.map(item => item / divisor);
};

// Retourne [2, 3.5, 7]
console.log([4, 7, 14].divide(2));
