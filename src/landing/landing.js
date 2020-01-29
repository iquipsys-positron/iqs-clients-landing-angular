/**
 * @file Landing page logic
 * @copyright Digital Living Software Corp. 2014-2015
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipLanding', [ 'pipLandingPanel']);

    thisModule.config(function ($stateProvider) {
        // Configure module routes
        $stateProvider.state('landing', {
            url: '/?value&contact&lang',
            auth: false,
            controller: 'pipLandingController',
            templateUrl: 'landing/landing.html'
        });
    });

    thisModule.controller('pipLandingController',
        function ($scope, $state, $mdMedia, $rootScope) {
            var landings = [
                'landing'
            ];
            $scope.landing = 'landing';
            $scope.$mdMedia = $mdMedia;

            if ($state.params.value) {
                if ($state.params.value < landings.length) {
                    $scope.landing = landings[$state.params.value];
                    
                }
            }

            if ($state.params.lang) {
                if ($state.params.lang == 'en' || $state.params.lang == 'ru') {
                    $scope.ln = $state.params.lang;
                }
            }

            $scope.contact = $state.params.contact;
            return;

            function randomLanding() {
                var value = Math.floor(Math.random() * (landings.length));
                $scope.landing = landings[value];
            }

        }
    );

})();