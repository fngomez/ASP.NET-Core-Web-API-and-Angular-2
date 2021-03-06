///<reference path="../../typings/index.d.ts"/>
System.register(["@angular/core", "@angular/platform-browser", "@angular/http", "@angular/forms", "@angular/router", "rxjs/Rx", "./Components/About.component", "./Components/App.component", "./Components/Home.component", "./Components/ItemList.component", "./Components/ItemDetail.component", "./Components/Login.component", "./Components/PageNotFound.component", "./App.routing", "./Services/Item.Service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, http_1, forms_1, router_1, About_component_1, App_component_1, Home_component_1, ItemList_component_1, ItemDetail_component_1, Login_component_1, PageNotFound_component_1, App_routing_1, Item_Service_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {
            },
            function (About_component_1_1) {
                About_component_1 = About_component_1_1;
            },
            function (App_component_1_1) {
                App_component_1 = App_component_1_1;
            },
            function (Home_component_1_1) {
                Home_component_1 = Home_component_1_1;
            },
            function (ItemList_component_1_1) {
                ItemList_component_1 = ItemList_component_1_1;
            },
            function (ItemDetail_component_1_1) {
                ItemDetail_component_1 = ItemDetail_component_1_1;
            },
            function (Login_component_1_1) {
                Login_component_1 = Login_component_1_1;
            },
            function (PageNotFound_component_1_1) {
                PageNotFound_component_1 = PageNotFound_component_1_1;
            },
            function (App_routing_1_1) {
                App_routing_1 = App_routing_1_1;
            },
            function (Item_Service_1_1) {
                Item_Service_1 = Item_Service_1_1;
            }
        ],
        execute: function () {///<reference path="../../typings/index.d.ts"/>
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    // Directives, components, and pipes
                    declarations: [
                        About_component_1.AboutComponent,
                        App_component_1.AppComponent,
                        Home_component_1.HomeComponent,
                        ItemList_component_1.ItemListComponent,
                        ItemDetail_component_1.ItemDetailComponent,
                        Login_component_1.LoginComponent,
                        PageNotFound_component_1.PageNotFoundComponent
                    ],
                    // Modules
                    imports: [
                        platform_browser_1.BrowserModule,
                        http_1.HttpModule,
                        forms_1.FormsModule,
                        router_1.RouterModule,
                        App_routing_1.AppRouting
                    ],
                    // Providers
                    providers: [
                        Item_Service_1.ItemService
                    ],
                    bootstrap: [
                        App_component_1.AppComponent
                    ]
                }),
                __metadata("design:paramtypes", [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
