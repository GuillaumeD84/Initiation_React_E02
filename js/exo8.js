/*
 * Créer la fonction createRobot()
 * var hello = createRobot(['Bonjour', 'Hello']);
 *
 * hello.say(); // ===> 'Bonjour'
 * hello.say(); // ===> 'Hello'
 * hello.say(); // ===> 'Bonjour'
 * hello.add('Coucou');
 * hello.say(); // ===> 'Hello'
 * hello.say(); // ===> 'Coucou'
 * hello.say(); // ===> 'Bonjour'
 * hello.delete('Hello');
 * hello.say(); // ===> 'Coucou'
 * hello.say(); // ===> 'Bonjour'
 * hello.say(); // ===> 'Coucou'
 * hello.add('Salut');
 * hello.say(); // ===> 'Salut'
 *
 *  - say() : permet de dire la prochaine phrase
 *  - add('x') : permet d'ajouter la phrase 'x' au vocabulaire
 *  - delete('x') : permet de supprimer la phrase 'x' du vocabulaire
 */

function createRobot(words) {
  var index = 0;

  return {
    say: function() {
      var word = words[index++];

      if (index >= words.length) {
        index = 0;
      }

      return console.log(word);
    },
    add: function(newWord) {
      words.push(newWord);
    },
    delete: function(wordToDelete) {
      words = words.filter(word => word !== wordToDelete);
    }
  };
}

var hello = createRobot(['Bonjour', 'Hello']);

hello.say(); // ===> 'Bonjour'
hello.say(); // ===> 'Hello'
hello.say(); // ===> 'Bonjour'
hello.add('Coucou');
hello.say(); // ===> 'Hello'
hello.say(); // ===> 'Coucou'
hello.say(); // ===> 'Bonjour'
hello.delete('Hello');
hello.say(); // ===> 'Coucou'
hello.say(); // ===> 'Bonjour'
hello.say(); // ===> 'Coucou'
hello.add('Salut');
hello.say(); // ===> 'Bonjour'
hello.say(); // ===> 'Coucou'
hello.say(); // ===> 'Salut'
