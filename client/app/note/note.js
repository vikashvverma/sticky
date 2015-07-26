'use strict';

angular.module('stickyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.notes', {
        url: 'notes',
        templateUrl: 'app/note/note.html',
        controller: 'NoteController as vm'
      });
  });
