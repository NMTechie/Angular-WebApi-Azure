(function () {
    var myModule = angular.module('MymainApp', []);

    myModule.factory('crudService', ['$http', function ($http) {
        var returnObj = {};

        returnObj.get = function (url) {
            return $http.get(url);
        };
        returnObj.post = function (url, data) {
            return $http.post(url, data);
        };
        returnObj.put = function (url, data) {
            return $http.put(url, data);
        };
        return returnObj;
    }]);

    angular.module('MymainApp').controller('MyMainCntlr', ['$scope', 'crudService', function ($scope, crudService) {

        $scope.hotelName = "";
        $scope.isShow = false;
        $scope.ShowForm = function () {
            if (!$scope.isShow)
            {
                $scope.isShow = true;
            }
            else
            {
                $scope.isShow = false;
            }
        };

        $scope.saveHotel = function () {
            console.log($scope.hotelName);
            var data = {
                HotelName: $scope.hotelName,
                HotelCode: 'CXD',
                HotelLocation:'KOL',
                HotelPrice:'12.10',
                IsHotelActive: 'true'
            };
            var url = 'http://localhost:61278/api/Values/Insert';
            crudService.post(url, data).then(
                function (response) {
                    $scope.hotels = response.data;
                }, function(error){
                    $scope.hotels = '';
                });
        };
    }]);

    
})()