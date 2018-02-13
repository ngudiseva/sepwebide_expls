sap.ui.define(["sap/m/MessageToast", "sap/ui/core/mvc/Controller"],
	function(MessageToast, Controller) {
		"use strict";

		return Controller.extend("YahooMail.controller.View1", {

			onClick: function() {

				var oPanel = this.getView().byId("list");
				oPanel.setVisible(true);
				var oPanel1 = this.getView().byId("list1");
				oPanel1.setVisible(false);
				var oPanel2 = this.getView().byId("list2");
				oPanel2.setVisible(false);
			},
			onClick1: function() {

				var oPanel = this.getView().byId("list1");
				oPanel.setVisible(true);
				var oPanel1 = this.getView().byId("list");
				oPanel1.setVisible(false);
				var oPanel2 = this.getView().byId("list2");
				oPanel2.setVisible(false);
			},
			onSignIn: function() {
				this.getOwnerComponent().getRouter().navTo("page2");
			},
			News:function(){
				// window.open("https://www.w3schools.com");
				window.open("http://www.eenadu.net/", "_blank");
					  //this.getView().byId("click").addContent( new sap.m.URLHelper({ text: "Phone:" }) );
			},
			// www.cricbuzz.com/
			cricket:function(){
				window.open("https://www.cricbuzz.com/", "_blank");
			}
		});
	});

// 	var PageController = Controller.extend("YahooMail.controller.View1", {

// 		onPress: function (evt) {
// 			MessageToast.show(evt.getSource().getId() + " Pressed");
// 		}
// 	});

// 	return PageController;

// });

// 			onInit: function() {
// 			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
// 			oRouter.getRoute("View2").attachPatternMatched(this.onObjectMatched, this);	
// 			},
// 			onObjectMatched: function (oEvent)
// 			{
// 			var b=	oEvent.getParameter("arguments").data;
// 					this.getView().byId("label1").setText(b);
// 			},

// 		/**
// 		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
// 		 * (NOT before the first rendering! onInit() is used for that one!).
// 		 * @memberOf Assign2.view.View2
// 		 */
// 		//	onBeforeRendering: function() {
// 		//
// 		//	},

// 		/**
// 		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
// 		 * This hook is the same one that SAPUI5 controls get after being rendered.
// 		 * @memberOf Assign2.view.View2
// 		 */
// 		//	onAfterRendering: function() {
// 		//
// 		//	},

// 		/**
// 		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
// 		 * @memberOf Assign2.view.View2
// 		 */
// 		//	onExit: function() {
// 		//
// 		//	}

// 		getRouter : function () {
// 			return sap.ui.core.UIComponent.getRouterFor(this);
// 		},

// 		back: function() {
// 			this.getRouter().navTo("View1"); 	// calls route name "first"
// 		}

// 	});

// });