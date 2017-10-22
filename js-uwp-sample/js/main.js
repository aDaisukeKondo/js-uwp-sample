(function () {
	"use strict";

	var app = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;
	var isFirstActivation = true;

	app.onactivated = function (args) {
		if (isFirstActivation) {
			document.addEventListener("visibilitychange", onVisibilityChanged);
			args.setPromise(WinJS.UI.processAll());
		}

    // initialize

		isFirstActivation = false;
	};

	function onVisibilityChanged(args) {
		if (!document.hidden) {
			// update view
		}
	}

	app.start();

})();
