angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,storage,$location,$window) {

    $scope.projects = storage.getAllProjects();
    $scope.newProject = {};
    $scope.activeProject = storage.getActiveProject();
    if($scope.activeProject){
        $scope.tasks = $scope.activeProject.tasks;
    }else{
        $scope.tasks = [];
    }
    
    $ionicModal.fromTemplateUrl('../templates/projectModal.html',{
            scope:$scope,
            animation: 'slide-in-up'
        }).then(function(modal){
            $scope.ProjectModal = modal;
        })

    $scope.add = function(){
            $scope.ProjectModal.show();
    }
    $scope.closeProject = function(){
            $scope.ProjectModal.hide();
    }

    $scope.createProject = function(){
        $scope.newProject.tasks = [];
        $scope.projects.push($scope.newProject);
        $scope.newProject = {};
        $scope.ProjectModal.hide();
        storage.setAllProjects($scope.projects);
        $window.location.reload(true)

    }

    $scope.selectProject = function(index){
        $scope.activeProject = $scope.projects[index];
        storage.setActiveProject($scope.activeProject);
        $window.location.reload(true)
    }

    $ionicModal.fromTemplateUrl('../templates/taskModal.html',{
            scope:$scope,
            animation: 'slide-in-up'
        }).then(function(modal){
            $scope.taskModal = modal;
        })

        $scope.newTask = {};


    $scope.addTask = function(){
        $scope.taskModal.show();

    };

    $scope.closeTask = function(){
        $scope.taskModal.hide();

    };

    $scope.createTask = function(){
    //  $scope.activeProject = storage.getActiveProject();
      $scope.activeProject.tasks.push($scope.newTask);
      $scope.tasks = $scope.activeProject.tasks;
      storage.setActiveProject($scope.activeProject);
      $scope.taskModal.hide();
      $window.location.reload(true)
    }

    
}) 
