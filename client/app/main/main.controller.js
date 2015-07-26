'use strict';

angular.module('stickyApp')
  .controller('MainCtrl', function ($scope, $location,$mdSidenav,$timeout, Auth) {
    var vm = this;
    vm.isLoggedIn = Auth.isLoggedIn;
    vm.isAdmin = Auth.isAdmin;
    vm.getCurrentUser = Auth.getCurrentUser;

    vm.logout = function () {
      Auth.logout();
      $location.path('/login');
    };
    vm.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };
    vm.mainMenu = [
      {
        icon: "fa fa-lock fa-2x",
        title: "Note",
        tooltip: "Note",
        url: 'main.notes'
      }
    ];
    vm.extraMenu=[];


  });
