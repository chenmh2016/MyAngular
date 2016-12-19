

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
        controller:'ReaderCreatCtrl as vm'
      })
      .state('reader.list',{
        url:'/list',
        templateUrl:'views/reader/list.html',
        controller:'MainCtrl.listCtrl as vm'
      })
      .state('reader.themeTree',{
        url:'/themeTree',
        templateUrl:'views/reader/themeTree.html',
        controller:'MainCtrl.themeTreeCtrl as vm'
      })
      .state('ngDirective',{
        url:'/ngDirective',
        template:'<div ui-view></div>',
        abstract:true
      })
      .state('ngDirective.expander',{
        url:'/expander',
        templateUrl:'views/NgDirective/expander.html',
        controller:'ExpanderCtrl as vm'
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
