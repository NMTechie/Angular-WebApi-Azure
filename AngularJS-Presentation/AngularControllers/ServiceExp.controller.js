(function () {
    'use strict';

    angular
        .module('ServiceExp')
        .factory('ServiceExpFactory', function () {
            var retObject = {};
            retObject.user = {
                name: 'Nilesh-This is from Service'
            };
            retObject.sayhello = function () {
                alert('Hello from My Service');
            };
            return retObject;
        });
    /***************************************************************************************************************/


    angular
        .module('ServiceExp')
        .controller('MainController', MainCntlr);

    MainCntlr.$inject = ['ServiceExpFactory'];

    function MainCntlr(ServiceExpFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.model = ServiceExpFactory;
        this.user = {
            name: 'This is from main controller'
        };
    }
    /***************************************************************************************************************/
    angular.module('ServiceExp').controller('FirstController', ['ServiceExpFactory', function (ServiceExpFactory) {
        var vm = this;
        vm.model = ServiceExpFactory;
        this.user = {
            name: 'This is from First controller'
        };
        var dummyObject1 = {name:'Prasenjit'};
        this.dummyObject = { dummyObj: dummyObject1};
    }]);

    /***************************************************************************************************************/
    angular
        .module('ServiceExp')
        .controller('SecondController', SecCntlr);

    SecCntlr.$inject = ['ServiceExpFactory'];

    function SecCntlr(ServiceExpFactory) {
        /* jshint validthis:true */
        this.model = ServiceExpFactory;
        this.user = {
            name: 'This is from second controller',
            roll : 123456
        };
    }

})();


