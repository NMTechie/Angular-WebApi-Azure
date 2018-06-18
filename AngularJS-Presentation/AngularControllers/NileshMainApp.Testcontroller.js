//(function () {
//    'use strict';

//    angular
//        .module('NileshApp')
//        .controller('Testcontroller', controller);

//    //controller.$inject = ['$scope'];

//    function controller() {
//        /* jshint validthis:true */
//        var vm = this;
//        vm.name = 'controller';

//        activate();

//        function activate() { }
//    }
//})();
angular.module('NileshMainApp').controller("Testcontroller", ['$scope',function ($scope) {
    $scope.name = "Main App and related section";
    $scope.setColor = "red";
}]);
