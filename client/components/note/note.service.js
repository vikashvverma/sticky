'use strict';

angular.module('stickyApp')
  .factory('NoteService', function Auth($location, $rootScope, $http, Auth, $cookieStore, $q,$log) {
    var currentNote={};

    return {
      getNotes:function(){
        return $http.get('/api/notes/'+Auth.getCurrentUser()._id);
      },
      createNote:function(note){
        return $http({
          method:'POST',
          url:'/api/notes',
          data:note
        }).success(function(data){
          $log.info(data);
          $q.resolve(data);
        }).error(function(err){
          $log.error(err);
          $q.reject(err);

        });
      },
      updateNote:function(note){
        return $http({
          method:'PUT',
          url:'/api/notes/'+note._id,
          data:note
        }).success(function(data){
          $log.info(data);
          $q.resolve(data);
        }).error(function(err){
          $log.error(err);
          $q.reject(err);

        });
      },
      deleteNote:function(note){
        return $http({
          method:'DELETE',
          url:'/api/notes/'+note._id,
          data:note
        }).success(function(data){
          $log.info(data);
          $q.resolve(data);
        }).error(function(err){
          $log.error(err);
          $q.reject(err);

        });
      },
      shareNote:function(note){

      },
      setNote:function(note){
        currentNote=note;
      },
      getNote:function(){
        return currentNote;
      }
    };
  });
