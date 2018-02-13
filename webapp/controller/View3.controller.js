sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
	function(Controller, MessageToast) {
		"use strict";

		return Controller.extend("YahooMail.controller.View3", {
			OnClick_3: function() {
				var msg = "Account Created Successfully";
				MessageToast.show(msg, {
					my: "center top",
					at: "center top"
				});
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("page2");
			}
		});
	});