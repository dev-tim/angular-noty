angular.module('nottyApp', ['notyModule'])
		.controller('AppCtrl', function ($scope, noty) {
			$scope.showNotification = function () {
				noty.show('Test message',"success")
			};
			$scope.close = function () {
				noty.closeAll()
			}
		});