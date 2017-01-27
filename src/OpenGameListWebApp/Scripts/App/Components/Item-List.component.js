System.register(["@angular/core", "../Services/Item.Service"], function (exports_1, context_1) {
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
    var core_1, Item_Service_1, ItemListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Item_Service_1_1) {
                Item_Service_1 = Item_Service_1_1;
            }
        ],
        execute: function () {
            ItemListComponent = (function () {
                function ItemListComponent(itemService) {
                    this.itemService = itemService;
                }
                ItemListComponent.prototype.ngOnInit = function () {
                    this.getLatest();
                };
                ItemListComponent.prototype.getLatest = function () {
                    var _this = this;
                    this.itemService.getLatest().subscribe(function (latestItems) { return _this.items = latestItems; }, function (error) { return _this.errorMessage = error; });
                };
                ItemListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                    console.log("Item with Id " + this.selectedItem.Id + " has been selected.");
                };
                return ItemListComponent;
            }());
            ItemListComponent = __decorate([
                core_1.Component({
                    selector: 'Item-List',
                    template: "\n        <h2>Latest Items</h2>\n        <ul class=\"items\">\n            <li *ngFor=\"let item of items\"\n                [class.selected]=\"item === selectedItem\"\n                (click)=\"onSelect(item)\">\n                <span>{{item.Title}}</span>\n            </li>\n        </ul>\n        <Item-Detail *ngIf=\"selectedItem\" [item]=\"selectedItem\"></Item-Detail>\n    ",
                    styles: ["\n        ul.items li {\n            cursor: pointer;\n        }\n\n        ul.items li.selected {\n            background-color: #cccccc;\n        }\n    "]
                }),
                __metadata("design:paramtypes", [Item_Service_1.ItemService])
            ], ItemListComponent);
            exports_1("ItemListComponent", ItemListComponent);
        }
    };
});
