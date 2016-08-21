'use strict';

angular.module('questionsApp')
    // JSON-Web-Server base URL
    .constant('baseURL', 'http://localhost:3000/')

    .service('questionsService', ['$resource', 'baseURL', function($resource, baseURL) {

        this.getQuestions = function(){
            return $resource(baseURL + "questions");
        };

        this.getQuestionById = function(){
            return $resource(baseURL + "questions/:id");
        }

    }])

    .service('usersService', ['$resource', 'baseURL', function($resource, baseURL) {

        this.getQuestions = function(){
            return $resource(baseURL + "users");
        };

        this.getQuestionById = function(id){
            return $resource(baseURL + "users/:id");
        }

    }])

    .service('commentsService', ['$resource', 'baseURL', function($resource, baseURL) {

        this.getComments = function(questionId){
            return $resource(baseURL + "users");
        };

        this.getQuestionById = function(id){
            return $resource(baseURL + "users/:id");
        }

    }]);
