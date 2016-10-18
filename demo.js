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

			$scope.prompt = function () {
				noty.call({
					text: 'Are you sure you want to delete ITEM?',
					buttons: [
						{
							addClass: 'btn btn-primary', text: 'Yes, delete', onClick: function($noty) {
								$scope.delete(item);
								noty.closeAll();
							}
						},
						{
							addClass: 'btn btn-danger', text: 'Cancel', onClick: function($noty) {
								noty.closeAll();
							}
						}
					]
				});
			}
		});
	})();
