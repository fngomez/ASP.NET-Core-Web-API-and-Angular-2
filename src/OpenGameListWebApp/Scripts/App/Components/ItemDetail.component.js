System.register(["@angular/core", "@angular/router", "../Services/Item.Service"], function (exports_1, context_1) {
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
    var core_1, router_1, Item_Service_1, ItemDetailComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Item_Service_1_1) {
                Item_Service_1 = Item_Service_1_1;
            }
        ],
        execute: function () {
            ItemDetailComponent = (function () {
                function ItemDetailComponent(itemService, router, activatedRoute) {
                    this.itemService = itemService;
                    this.router = router;
                    this.activatedRoute = activatedRoute;
                }
                ItemDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this.activatedRoute.snapshot.params['id'];
                    if (id) {
                        this.itemService.get(id).subscribe(function (item) { return _this.item = item; });
                        console.log(this.item);
                    }
                    else {
                        console.log("Invalid id: routing back to home...");
                        this.router.navigate([""]);
                    }
                };
                return ItemDetailComponent;
            }());
            ItemDetailComponent = __decorate([
                core_1.Component({
                    selector: "ItemDetail",
                    templateUrl: './Templates/ItemDetail.component.html',
                    styleUrls: ['./Styles/ItemDetail.component.css']
                }),
                __metadata("design:paramtypes", [Item_Service_1.ItemService, router_1.Router, router_1.ActivatedRoute])
            ], ItemDetailComponent);
            exports_1("ItemDetailComponent", ItemDetailComponent);
        }
    };
});
