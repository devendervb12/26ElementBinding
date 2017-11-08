sap.ui.controller("zjsondb03.CompanyData", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zjsondb03.CompanyData
*/
	onInit: function() {
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("compInfo/compData.json");
		
		this.getView().setModel(oModel);
		
		// do element binding to simpleform with companyinformation property
		
		// get the ref of simpleform 1
		var osf1 = this.getView().byId("idsf1");
		osf1.bindElement("/companyInformation");
		
		
		var osf2 = this.getView().byId("idSf2");
		var index = 1;
		osf2.bindElement("/companyInformation/empInfoSet/"+index+"");

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zjsondb03.CompanyData
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zjsondb03.CompanyData
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zjsondb03.CompanyData
*/
//	onExit: function() {
//
//	}

});