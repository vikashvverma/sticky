'use strict';

angular.module('stickyApp')
  .controller('NoteController', function ($scope, $location, $mdDialog, $log, User, Auth, NoteService,ngNotify) {
    var vm = this;
    vm.hasDialog=false;

    vm.notes=[];
    //populate notes by calling service
    (function(){

      NoteService.getNotes()
        .success(function(data){
          $log.info(data);
          vm.notes=data;
        })
        .error(function(){

        });

    })();

    //open note editor
    vm.openEditor = function (ev) {
      vm.hasDialog=true;
      $mdDialog.show({
        controller: noteController,
        templateUrl: 'app/note/editor.dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev || null,
      })
        .then(function (note) {
          vm.hasDialog=false;
          $log.info(note);
          vm.save(note);
        }, function () {
          vm.hasDialog=false;
        });
    };

    //save note to db
    vm.save = function (note) {
      note.userId=Auth.getCurrentUser()._id;
      NoteService.createNote(note)
        .success(function(data){
          vm.notes.unshift(data);
          vm.notify("Note saved!",'success');
        }).error(function(err){
          vm.notify("Note could not be saved!",'error');
          $log.error(err);

        });
    };

    //edit a note
    vm.edit=function(ev,note){
      vm.hasDialog=true;
      NoteService.setNote({_id:note._id,title:note.title,description:note.description,labels:note.labels});
      $mdDialog.show({
        controller: editController,
        templateUrl: 'app/note/editor.dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev || null,
      })
        .then(function (note) {
          vm.hasDialog=false;
          $log.info(note);
          vm.update(note);
        }, function (note) {
          $log.warn(note);
          vm.notes.filter(function(obj){
            vm.hasDialog=false;
            return obj._id==note._id
          })[0]=note;
        });
    };

    //update the note
    vm.update=function(note){
      note.userId=Auth.getCurrentUser()._id;
      NoteService.updateNote(note)
        .success(function(data){
          for(var i=0;i<vm.notes.length;i++){
            if(vm.notes[i]._id==data._id){
              vm.notes[i]=data;
              break;
            }
          }
          vm.notify("Note Updated!",'success');
        }).error(function(err){
          vm.notify("Note could not be updated!",'error');
          $log.error(err);

        });
    };

    //delete a not from db and update UI
    vm.delete=function(note){
      $log.info(note);
      NoteService.deleteNote(note)
        .success(function(data){
          vm.notes=vm.notes.filter(function(obj){
            return obj._id!=note._id;
          });
          vm.notify('Note successfully deleted!','success');
        })
        .error(function(err){
          vm.notify('Note could not be deleted, try again later!','error');
        });
    };
    vm.notify=function(message,type){
      ngNotify.set(message,type);
    };
  });

function editController($scope, $mdDialog,NoteService) {
  $scope.note=NoteService.getNote();
  var note= angular.copy(NoteService.getNote());
  $scope.hide = function () {
    $mdDialog.hide($scope.note);
  };
  $scope.cancel = function () {
    $mdDialog.cancel(note);
  };
};
function noteController($scope, $mdDialog) {
  $scope.note={};
  $scope.hide = function () {
    $mdDialog.hide($scope.note);
  };
  $scope.cancel = function () {
    $mdDialog.cancel();
  };
};
