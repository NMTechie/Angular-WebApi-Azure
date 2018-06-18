(function ()
{
    'use strict';
     angular
         .module('NileshSecApp')
         .controller('Testcontroller', controller);

    function controller() {
        /* jshint validthis:true */
        var vm = this;
        vm.name = "Sec App and related section";
        vm.valueToFormat = "This is my value";
    }
})();
