(function () {
    'use strict';
    angular.module('TimeOutExp', []);
    angular
        .module('TimeOutExp')
        .controller('TimeOutExpcontroller', controllerFunction);

    controllerFunction.$inject = ['$timeout'];

    function controllerFunction($timeOut) {
        /* jshint validthis:true */
        var vm = this;
        vm.message = '';
        vm.timeOut = 5000;
        vm.timeOutPromise = null;

        vm.startTimeout = function () { 
            vm.message = 'New timeOut strated';
            vm.timeOutPromise = $timeOut(function (data) {
                vm.message = 'Time Out Complete';
                vm.timeOutPromise = null;
            }, vm.timeOut, true, { key: 'TestData123' });
        };

        vm.cancelTimeout = function () {
            if (vm.timeOutPromise) {
                $timeOut.cancel(vm.timeOutPromise);
                vm.timeOutPromise = null;
                vm.message = 'Time out is cancelled';
            }
        };
    }
})();
