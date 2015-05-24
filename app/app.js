/**
 * Created by Deb on 8/20/2014.
 */
(function () {
    "use strict";
    var app = angular.module("productManagement",
                            ["common.services",
                             "ui.router",
                             "productResourceMock"]);

    app.config(["$stateProvider",
                "$urlRouterProvider",
        function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/");
             //default state
            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "app/welcomeView.html"
                })
                // Products list state
                .state("productList", {
                    url: "/products",
                    templateUrl: "app/products/productListView.html",
                    controller: "ProductListCtrl as vm"
                })
                //Product Edit State
                .state("productEdit", {
                    url: "/products/edit/:productId",
                    templateUrl: "app/products/productEditView.html",
                    controller: "ProductEditCtrl as vm"
                })

        }]
    );
}());
