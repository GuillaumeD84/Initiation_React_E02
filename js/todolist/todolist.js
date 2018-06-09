const app = {
  init: function() {
    // Je stocke #todo, la cible pour les éléments de l'application
    app.todo = document.getElementById('todo');

    // Construction du formulaire
    app.createForm();

    // Construction du compteur
    app.createCount();

    // Construction de la liste de tâches
    app.createList();
  },
  /**
   * Construction du formulaire
   */
  createForm: function() {
    console.log('createForm');

    // Construire le formulaire <form>
    var form = document.createElement('form');

    // Construire le champ pour le label de la tâche
    var input = document.createElement('input');
    input.id = 'todoInput';
    input.placeholder = 'Ajouter une tâche';

    // Ajouter le champ dans le formulaire
    form.appendChild(input);

    // Ajouter le formulaire dans le DOM
    app.todo.appendChild(form);
  },
  /**
   * Construction du compteur
   */
  createCount: function() {
    console.log('createCount');

    // DOM (création du compteur)
    var counter = document.createElement('div');
    counter.id = 'todoCounter';

    // Ajouter du contenu
    counter.textContent = '2 tâches en cours';

    // Ajout du compteur à la #todo
    app.todo.appendChild(counter);
  },
  /**
   * Construction de la liste de tâches
   */
  createList: function() {
    console.log('createList');

    // Construire la liste
    var list = document.createElement('ul');
    list.id = 'todoList';

    // Tâche 1 pour exemple
    var task1 = document.createElement('li');
    task1.textContent = 'Je code Facebook';
    task1.className = 'task';

    // Tâche 2 pour exemple
    var task2 = document.createElement('li');
    task2.textContent = 'Je code une todolist';
    task2.className = 'task';

    // Ajouter les tâches à la liste
    list.appendChild(task1);
    list.appendChild(task2);

    // Ajouter la liste à #todo
    app.todo.appendChild(list);
  },
};

document.addEventListener('DOMContentLoaded', app.init);
