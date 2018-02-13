sap.ui.define(["sap/ui/core/mvc/Controller"],
	function(Controller) {
		"use strict";

		return Controller.extend("YahooMail.controller.View2", {
			handleLinkPress1: function() {
				// this.getOwnerComponent().getRouter().navTo("page3");
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("page3");
			}
		});
	});