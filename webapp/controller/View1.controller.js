sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

                var oData = {

                    milk : [
                        { Week : '1주차', Revenue : 123, Cost : 223}, //Week 를 기준으로 달라지는 것이기 때문에 week는 다르게주기
                        { Week : '2주차', Revenue : 456, Cost : 442},
                        { Week : '3주차', Revenue : 1002, Cost : 1212},
                        { Week : '4주차', Revenue : 339, Cost : 324}
                    ]
                };

                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
                
                var oVizFrame = this.byId("idVizFrame");
                var oPopOver = this.getView().byId("idPopOver");
                oPopOver.connect(oVizFrame.getVizUid());

            }
        });
    });
