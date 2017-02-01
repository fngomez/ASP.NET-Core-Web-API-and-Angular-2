System.register(["@angular/router", "./Components/Home.component", "./Components/About.component", "./Components/Login.component", "./Components/PageNotFound.component", "./Components/ItemDetail.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, Home_component_1, About_component_1, Login_component_1, PageNotFound_component_1, ItemDetail_component_1, appRoutes, AppRoutingProviders, AppRouting;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Home_component_1_1) {
                Home_component_1 = Home_component_1_1;
            },
            function (About_component_1_1) {
                About_component_1 = About_component_1_1;
            },
            function (Login_component_1_1) {
                Login_component_1 = Login_component_1_1;
            },
            function (PageNotFound_component_1_1) {
                PageNotFound_component_1 = PageNotFound_component_1_1;
            },
            function (ItemDetail_component_1_1) {
                ItemDetail_component_1 = ItemDetail_component_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                {
                    path: "",
                    component: Home_component_1.HomeComponent
                },
                {
                    path: "home",
                    redirectTo: ""
                },
                {
                    path: "about",
                    component: About_component_1.AboutComponent
                },
                {
                    path: "login",
                    component: Login_component_1.LoginComponent
                },
                {
                    path: "item/:id",
                    component: ItemDetail_component_1.ItemDetailComponent
                },
                {
                    path: '**',
                    component: PageNotFound_component_1.PageNotFoundComponent
                }
            ];
            exports_1("AppRoutingProviders", AppRoutingProviders = []);
            exports_1("AppRouting", AppRouting = router_1.RouterModule.forRoot(appRoutes));
        }
    };
});