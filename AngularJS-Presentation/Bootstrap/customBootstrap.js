/* old syntax */

//angular.element(document).ready(function () {
//    var myDiv1 = document.getElementById("Maindiv");
//    angular.bootstrap(myDiv1, ['NileshMainApp']);
//});

//angular.element(document).ready(function () {
//        var myDiv1 = document.getElementById("NextDiv");
//        angular.bootstrap(myDiv1, ['NileshSecApp']);
//    });

/* old syntax */

angular.element(function () {
    var myDiv1 = document.getElementById("Maindiv");
    angular.bootstrap(myDiv1, ['NileshMainApp']);
});

angular.element(function () {
        var myDiv1 = document.getElementById("NextDiv");
        angular.bootstrap(myDiv1, ['NileshSecApp']);
    });