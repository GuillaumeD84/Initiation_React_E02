const app = {
  init: function() {
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
  },
  /**
   * Construction du compteur
   */
  createCount: function() {
    console.log('createCount');
  },
  /**
   * Construction de la liste de tâches
   */
  createList: function() {
    console.log('createList');
  },
};

document.addEventListener('DOMContentLoaded', app.init);
