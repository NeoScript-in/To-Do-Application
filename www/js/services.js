angular.module('starter').factory('storage',function(){

	return {
		setActiveProject: function(project){
			var project = JSON.stringify(project);
			localStorage.setItem('project',project);
		},
		getActiveProject: function(project){
			var project = localStorage.getItem('project');
			project = JSON.parse(project);
			return project;
		},
		setAllProjects: function(projects){
			var projects = JSON.stringify(projects);
			localStorage.setItem('projects',projects);
		},
		getAllProjects: function(){
			var projects = localStorage.getItem('projects');
			if(projects){
				projects = JSON.parse(projects);
			}else{
				projects = [];
			}	
			return projects;
		}
	}
});