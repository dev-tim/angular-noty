(function () {
	'use strict';
	angular.module('nottyApp', ['notyModule'])
		.config(function (notyProvider) {
			notyProvider.settings = {
				theme: 'relax',
				text: 'Custom default message',
				layout: 'topCenter',
				force: true,
				easing: 'swing',
				timeout: 5000,
				animation: {
					open: 'animated  fadeInUp',
					close: 'animated fadeOutDown',
					easing: 'swing'
				}
			}
		})
		.controller('AppCtrl', function ($scope, noty) {
			$scope.showNotification = function () {
				noty.show('Test message','information');
			};
			
			$scope.showAlert = function () {
				noty.showAlert('Alert!')
			};
			
			$scope.showError = function () {
				noty.showError('Test message');
			};
			
			$scope.closeAll = function () {
				noty.closeAll()
			};
		});
	})();
