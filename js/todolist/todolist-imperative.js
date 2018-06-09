const app = {
  /**
   * Compteur des tâches
   */
  count: 0,
  /**
   * Point de départ de l'appli
   */
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
    form.addEventListener('submit', app.addTask);

    // Construire le champ pour le label de la tâche
    var input = document.createElement('input');
    input.type = 'text';
    input.id = 'todoInput';
    input.placeholder = 'Ajouter une tâche';
    // J'ajoute cet input à 'app'
    app.input = input;

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
    counter.textContent = `${app.count} ${app.count > 1 ? 'tâches' : 'tâche'} en cours`;

    app.counter = counter;

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
    app.list = list;

    // // Tâche 1 pour exemple
    // var task1 = app.generateTask({
    //   label: 'Je code Facebook',
    //   done: false
    // });
    //
    // // Tâche 2 pour exemple
    // var task2 = app.generateTask({
    //   label: 'Je code une todolist',
    //   done: true
    // });
    //
    // // Ajouter les tâches à la liste
    // list.appendChild(task1);
    // list.appendChild(task2);

    // Ajouter la liste à #todo
    app.todo.appendChild(list);
  },
  /**
   * Création d'une tâche
   */
  generateTask: function(data) {
    // Création du <li>
    var task = document.createElement('li');

    // Ajout de classe
    task.className = 'task';
    if (data.done) {
      task.classList.add('task-done');
    }

    // Ajouter une checkbox
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = data.done;
    checkbox.addEventListener('click', function() {
      // On test si la checkbox a été cochée/décochée
      if (this.checked) {
        // On ajoute la classe task-done à la tâche
        task.classList.add('task-done');

        // On décrémente le compteur
        app.count--;
      } else {
        // On retire la classe task-done de la tâche
        task.classList.remove('task-done');

        // On incrémente le compteur
        app.count++;
      }

      // On met à jour l'affichage du compteur
      app.updateCount();
    });

    // Gestion du label via un span
    var label = document.createElement('span');
    label.textContent = data.label;
    label.className = 'task-label';

    task.appendChild(checkbox);
    task.appendChild(label);

    // Retour de la tâche
    return task;
  },
  /**
   * Ajoute une tâche soumise via le form à la liste
   * handler de la soumission du form
   */
  addTask: function(evt) {
    // On bloque le comportement par défaut du formulaire
    evt.preventDefault();

    // On récupère la valeur de l'input
    var label = app.input.value.trim();

    // On créer la nouvelle tâche
    var task = app.generateTask({
      label: label,
      done: false
    });

    // Ajout de cette tâche à la liste
    app.list.appendChild(task);

    // On incrémente le compteur de tâche
    app.count++;

    // On met à jour l'affichage du compteur
    app.updateCount();

    // Vider l'input
    app.input.value = '';
  },
  updateCount: function() {
    app.counter.textContent = `${app.count} ${app.count > 1 ? 'tâches' : 'tâche'} en cours`;
  },
};

document.addEventListener('DOMContentLoaded', app.init);
