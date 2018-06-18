/**
* PromiseApp Module
* https://chariotsolutions.com/blog/post/angularjs-corner-using-promises-q-handle-asynchronous-calls/
* http://www.tothenew.com/blog/angularjs-deferred-promises-basic-understanding/;
* http://www.webdeveasy.com/javascript-promises-and-angularjs-q-service/
*/

(function()
{
angular.module('PromiseApp', []);

/*just return the $http promise*/
angular.module('PromiseApp').service('PromiseService', ['$http',function($http){
	this.GetHotelsPromise = function (url)
	{
		return $http.get(url);
	};
}])


angular.module('PromiseApp').service('PromiseServiceReturn', ['$http',function($http){
	this.FunctionWithReturn = function (url)
	{
		var obj = {name : url};
		return obj;
	};
}])

/*Bind the entire service with controller and then use the service with As syntax*/
angular.module('PromiseApp').service('CrudService', ['$http',function($http){
	this.returnData = {value:'Initial'};
	this.GetHotels = function (url)
	{
		
		$http.get(url).then(function(response){
			this.returnData={value:'Success'};

		}.bind(this),function(error){
			this.returnData={value:'error'};

		}.bind(this));
		
	};
}])

/* Promise Chaining - return the promise from $http but add a .then() call to the same $http*/
angular.module('PromiseApp').service('PromiseServiceChaining', ['$http',function($http){
	this.PromiseWithReturn = function (url)
	{
		return $http.get(url).then(function(response){
			return response.data;
		},function(response){
			return {
				Error:response.status,
				id:response.data
			};
		})
	};
}])


/*Promise with defer - Custom promise handling*/
angular.module('PromiseApp').service('CustomPromiseService', ['$q','$http',function($q,$http){
	this.DeferPromise = function(url){
		var myDefererr = $q.defer();
		$http.get(url).then(myDefererr.resolve,myDefererr.reject);
		return myDefererr.promise;
	}
}])




angular.module('PromiseApp').controller('PromiseAppController', ['PromiseService','PromiseServiceReturn','CrudService','PromiseServiceChaining','CustomPromiseService',function(PromiseService,PromiseServiceReturn,CrudService,PromiseServiceChaining,CustomPromiseService){
	

	var GetPromise = PromiseService.GetHotelsPromise('http://localhost:61278/api/values/GetHotels');
	GetPromise.then(function(response){
		this.localvar = 'Success Name';
	}.bind(this),function(respose){
		this.localvar = 'Error Name';
	}.bind(this))
	/****************************************************************************************************/
	this.returnFromService = PromiseServiceReturn.FunctionWithReturn('URL');
	/****************************************************************************************************/
	this.returnFromCrudService = CrudService.returnData;
	this.CrudServiceRef = CrudService;
	CrudService.GetHotels('http://localhost:61278/api/values/GetHotels');
	/****************************************************************************************************/
	PromiseServiceChaining.PromiseWithReturn('http://localhost:61278/api/values/GetHotels').then(function(response){
		this.dataFromPromiseServiceReturnVar1 = response;
	}.bind(this));
	/****************************************************************************************************/
	var GetMyCustomPromise = CustomPromiseService.DeferPromise('http://localhost:61278/api/values/GetHotels');
	GetMyCustomPromise.then(function(response){
		this.CustomPromisevalue = {Success : 'True'};
	}.bind(this),function(response){
		this.CustomPromisevalue = {Success : 'False'};
	}.bind(this))
}])
})()