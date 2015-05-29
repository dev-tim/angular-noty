(function (angular, $) {
	'use strict';
	return angular.module('notyModule', []).provider('noty', function () {
		var provider = {
			settings: $.noty.defaults,
			$get: function () {
				var callNoty = function (newSettings) {
					return noty(angular.extend(newSettings, provider.settings));
				};

				return {
					show: function (message, type) {
						callNoty({text: message || provider.settings.text, type: type || provider.settings.type});
					},

					showAlert: function (message) {
						callNoty({text: message || provider.settings.text, type: "alert"});
					},

					showSuccess: function (message) {
						callNoty({text: message || provider.settings.text, type: "success"});
					},

					showError: function (message) {
						callNoty({text: message || provider.settings.text, type: "error"});
					},

					closeAll: function () {
						return $.noty.closeAll()
					},
					clearShowQueue: function () {
						return $.noty.clearQueue();
					}.bind(this)
				}
			}

		};
		return provider;
	})
}(angular, jQuery));