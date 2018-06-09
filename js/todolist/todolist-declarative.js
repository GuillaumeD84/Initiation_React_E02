const tasks = [
  {
    label: 'Je code Facebook',
    done: false,
  },
  {
    label: 'Je code une todolist',
    done: true,
  },
  {
    label: 'Je code Meal\'O\'Clock',
    done: true,
  },
  {
    label: 'Je découvre le déclaratif',
    done: false,
  },
  {
    label: 'Je revise',
    done: false,
  },
];

const app = {
  /**
   * Point de départ de l'appli
   */
  init: function() {
    // Je stocke #todo, la cible pour les éléments de l'application
    app.todo = document.getElementById('todo');

    // Lorsque l'on ajoute une tâche on relance app.init()
    // Il faut donc vider la #todo pour ne pas avoir une duplication de l'appli
    app.todo.innerHTML = '';

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

    // On récupère la liste des tâches non terminées
    var tasksUndone = tasks.filter(function(task) {
      return !task.done;
    });

    // Ajouter du contenu
    counter.textContent = `${tasksUndone.length} ${tasksUndone.length > 1 ? 'tâches' : 'tâche'} en cours`;

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

    tasks.forEach(app.generateTask);

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
      // On inverse la valeur true/false
      data.done = !data.done;

      // On recharge l'affichage
      app.init();
    });

    // Gestion du label via un span
    var label = document.createElement('span');
    label.textContent = data.label;
    label.className = 'task-label';

    task.appendChild(checkbox);
    task.appendChild(label);

    // Retour de la tâche
    app.list.appendChild(task);
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

    // J'ajoute au tableau des tâches
    tasks.push({
      label: label,
      done: false
    });

    // Vider l'input
    app.input.value = '';

    // On recharge la page pour mettre à jour l'affichage
    app.init();
  },
};

document.addEventListener('DOMContentLoaded', app.init);
