(function () {
    'use strict';

    angular
        .module('NileshMainApp')
        .controller('BindingAndValidation', controller);

       function controller() {
        /* jshint validthis:true */
           this.chooseFromOption = ['Select One', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
           this.users =[
               {
                   name : 'Nilesh',
                   standard : 'One',
                   roll:123,
                   isActive:0
               },
               {
                   name : 'Rajesh',
                   standard : 'Two',
                   roll:456,
                   isActive:0
               },
               {
                   name : 'Kaushik',
                   standard : 'Three',
                   roll:678,
                   isActive:1
               },
               {
                   name : 'Susovan',
                   standard : 'Four',
                   roll:12345,
                   isActive:1
               },
               {
                   name : 'Shreya',
                   standard : 'Five',
                   roll:9876,
                   isActive:1
               }
           ];
    }
})();
