angular.module('nottyApp', ['notyModule'])
		.config(function (notyProvider) {
			notyProvider.settings = {
				text: 'Custom default message',
				animation: {
					open: {height: 'toggle'},
					close: {height: 'toggle'},
					easing: 'swing',
					speed: 1000
				}
			}
		})
		.controller('AppCtrl', function ($scope, noty) {
			$scope.showNotification = function () {
				noty.show('Test message',"success")
			};
			$scope.closeAll = function () {
				noty.closeAll()
			}
		});