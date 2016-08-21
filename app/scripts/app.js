'use strict';

angular.module('questionsApp', ['ui.router', 'ngResource'])

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        // homepage route
        .state('app', {
            url: '/',
            views: {
                'header': {
                    templateUrl: 'views/header.html',
                },
                'content': {
                    templateUrl: 'views/home.html',
                    controller: 'IndexController'
                },
                'footer': {
                    templateUrl: 'views/footer.html',
                }
            }
        })
        // question route
        .state('app.question', {
            url: 'question/:id',
            views: {
                'content@': {
                    templateUrl: 'views/question.html',
                    controller: 'QuestionController'
                }
            }
        })
        // profile route
        .state('app.profile', {
            url: 'profile',
            views: {
                'content@': {
                    templateUrl: 'views/profile.html',
                    controller: 'ProfileController'
                }
            }
        });

    $urlRouterProvider.otherwise('/');

});
