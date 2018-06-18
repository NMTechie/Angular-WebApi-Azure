(function(){

angular.module('HotelExp', []);

angular.module('HotelExp').service('GetHoteldata', [function(){
this.hotelList=[];
this.hotelList.push({name:'Holiday Inn Delhi',code:'DEL'});
this.hotelList.push({name:'Hyat Regency Kolkata',code:'KOL'});
this.hotelList.push({name:'Novotel Newtown',code:'KOL'});
this.hotelList.push({name:'Monotel Pwc',code:'PWC'});
this.hotelList.push({name:'Sheraton Mumbai',code:'MUM'});
this.hotelList.push({name:'Grand ParkStreet',code:'PARK'});
}]);



angular.module('HotelExp').factory('GetStudentData', function(){
var returnObject={};
returnObject.studentList=[];
returnObject.studentList.push({name:'Nilesh',roll:1,class:1});
returnObject.studentList.push({name:'Susovan',roll:2,class:3});
returnObject.studentList.push({name:'Prasenjit',roll:3,class:4});
returnObject.studentList.push({name:'Tiger',roll:4,class:5});
returnObject.studentList.push({name:'Anirban',roll:5,class:6});
returnObject.studentList.push({name:'Pyadyut',roll:7,class:8});


returnObject.TestFuntion = function(){
	alert('This is fatory service');
};
	return returnObject;
});



angular.module('HotelExp').controller('HotelMaincontroller',HotelMainCntlr);
HotelMainCntlr.$inect=['GetHoteldata'];
function HotelMainCntlr(GetHoteldata){
	var vm = this;	
	vm.modelHotels = GetHoteldata;
	vm.limitTheList = vm.modelHotels.hotelList.length;

};

angular.module('HotelExp').factory('GetMyHotels', ['$http', function($http){
	var obj = {};
	obj.hotels=[];
	obj.hotels.push({name:'Pyadyut',roll:7,class:8});
	$http.get('http://localhost:61278/api/values/GetHotels').then(function(response){
		obj.hotels=response.data;
	}.bind(obj),function(response){});

	return obj;
	
}]);

angular.module('HotelExp').controller('StudentMainController', ['GetStudentData','GetMyHotels', function(GetStudentData,GetMyHotels){
var vm = this;
vm.modelStudents = GetStudentData.studentList;
vm.handleClick = GetStudentData.TestFuntion;
vm.myHotels=GetMyHotels;
}]);





})();