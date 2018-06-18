(function () {
    'use strict';

    angular
        .module('NileshSecApp')
        .controller('inputNoutputFilter', controller);

      function controller() {
        /* jshint validthis:true */
          this.contries = [
              {
                  iso: 'IND',
                  name:'INDIA'
              },
              {
                  iso: 'ENG',
                  name: 'ENGLAND'
              },
              {
                  iso: 'FRA',
                  name: 'FRANCE'
              },
              {
                  iso: 'USA',
                  name: 'AMERICA'
              },
              {
                  iso: 'JPY',
                  name: 'JAPAN'
              },
              {
                  iso: 'ITA',
                  name: 'ITALY'
              },
              {
                  iso: 'KOL',
                  name: 'KOLKATA'
              },
              {
                  iso: 'CHI',
                  name: 'CHINA'
              }
          ];
          this.myList = ['A', 'B', 'C', 'D', 'E', 'F'];
          
    }
})();
