

'use strict';

/**
 * @ngdoc overview
 * @name testChenApp
 * @description
 * # testChenApp
 *
 * Main module of the application.
 */
angular
  .module('testChenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    //'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('reader',{
        url:'/reader',
        template:'<div ui-view></div>',
        abstract:true
      })
      .state('reader.create',{
        url:'/create',
        templateUrl:'views/reader/create.html',
        controller:'MainCtrl.ReaderCreatCtrl'
      })
      .state('main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('/',{
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: ''
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: ''
      })

  })



//ng-route的写法
  //.config(function ($routeProvider) {
  //  $routeProvider
  //    .when('/', {
  //      templateUrl: 'views/main.html',
  //      controller: 'MainCtrl',
  //      controllerAs: 'main'
  //    })
  //    .when('/about', {
  //      templateUrl: 'views/about.html',
  //      controller: 'AboutCtrl',
  //      controllerAs: 'about'
  //    })
  //    .otherwise({
  //      redirectTo: '/'
  //    });
  //});
