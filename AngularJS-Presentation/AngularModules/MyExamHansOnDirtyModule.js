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
    angular.module('MymainApp').constant('URL','https://localhost:61278/api/Values/');

    angular.module('MymainApp').controller('MyMainCntlr', ['$scope', 'crudService','URL', function ($scope, crudService,URL) {

        $scope.hotelName = "";
        $scope.hasError = 'hasError';
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

            var url = '';
            if ($scope.Env.toUpperCase() == 'DEV') {
                url = URL;
            } else {
                url = 'https://nileshappservice.azurewebsites.net/api/Values/';
            }
            
            crudService.post(url+'Insert', data).then(
                function (response) {
                    $scope.hotels = response.data;
                    $scope.SelectedHotel = $scope.hotels[0];
                }, function(error){
                    $scope.hotels = '';
                });
        };
    }]);

    
})()