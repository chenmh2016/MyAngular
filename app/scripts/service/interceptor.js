/**
 * Created by meihuan on 2016/12/28.
 */
'use strict';
angular.module('testChenApp')
  .factory('authInterceptor', ['$q', 'authService', function ($q, authService) {
    return {
      'request': function (config) {
        config.headers = config.headers || {};
        var token = authService.getToken() || {};
        angular.forEach(token, function (value, key) {
          if (!config.headers[key]) {
            config.headers[key] = value;
          }
        });
        return config || $q.when(config);
      },
      'requestError': function (rejection) {
        return $q.reject(rejection);
      },
      'response': function (response) {
        return response;
      },
      'responseError': function (rejection) {
        console.log('response error: ', rejection);
        var urlall = rejection.config.url;
        if (rejection.status == 0 && (urlall.length != 0)) {
          window.location.reload();
        }else if(rejection.status == 404){
          console.log("404404")
        }
        return $q.reject(rejection)
      }
    };
  }])
  .constant('tokenCacheFactory', {
    'jsObject': function () {
      var tokenStorage;
      return [function () {
        return {
          save: function (token) {
            tokenStorage = angular.copy(token);
            return tokenStorage;
          },
          get: function () {
            return tokenStorage;
          },
          remove: function () {
            tokenStorage = null;
          }
        }
      }]
    }
  }).provider("authService", function () {
    var tokenCache, cacheFactory, self = this;
    self.setCacheFactory = function (factory) {
      cacheFactory = factory;
      return self;
    };
    self.$get = function (tokenCacheFactory, $injector,$cookies) {
      cacheFactory = cacheFactory || tokenCacheFactory.jsObject();
      tokenCache = $injector.invoke(cacheFactory);
      return {
        setToken: function (token) {
          return tokenCache.save(token);
        },
        getToken: function () {
          //return tokenCache.get();
          return tokenCache.get()||{"tokenchen":Math.random()};//不知道怎么算出来的token，我自定义了一个token对象
          //return tokenCache.get()||{"tokenchen":"chenmeihuande token"};//不知道怎么算出来的token，我自定义了一个token对象
        },
        removeToken: function () {
          return tokenCache.remove();
        }
      }
    }
  })

  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  }])

  //下面的run是摘抄自云盾混合云上的ui，，app script 下面的initConfig文件
.run(['$http','$cookies',function($http, $cookies){

  var csrfToken = $cookies['_ga'];
    console.log("var csrfToken = $cookies['_ga'];"+$cookies['_ga'])
  if (!!csrfToken) {
    $http.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
  }
}]);
