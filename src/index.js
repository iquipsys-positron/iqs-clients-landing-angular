/**
 * @file Application bootstrap logic
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('iquipsysApp', [
        // 3rd Party Modules
        'ui.router', 'ui.utils', 'ngResource', 'ngAria', 'ngCookies', 'ngSanitize', 'ngMessages',
        'ngMaterial', 'wu.masonry', 'LocalStorageModule', 'ngAnimate',

        'pipPageReset',
        'pipTranslate',

        'pipLanding',

        'iquipsys.Templates'
    ]);

    thisModule.config(
        function ($urlRouterProvider, $mdIconProvider) {

            $mdIconProvider.iconSet('icons', 'images/icons.svg', 512);
            $urlRouterProvider.otherwise(function ($injector, $location){
                console.log($location.$$path);
                if ($location.$$path == '') return '/';
                else return '/';
            });

        });
    // Initialize the application
    thisModule.run(function ($state, $rootScope) {
    });

    thisModule.controller('iquipsysController',
        function ($scope, $state, $rootScope, $mdMedia) {



        }
    );
})();
