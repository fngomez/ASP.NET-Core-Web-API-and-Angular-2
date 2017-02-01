System.register(["@angular/core","@angular/router","../Services/Item.Service"],function(exports_1,context_1){"use strict";var core_1,router_1,Item_Service_1,ItemListComponent,__decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};context_1&&context_1.id;return{setters:[function(core_1_1){core_1=core_1_1},function(router_1_1){router_1=router_1_1},function(Item_Service_1_1){Item_Service_1=Item_Service_1_1}],execute:function(){ItemListComponent=function(){function ItemListComponent(itemService,router){this.itemService=itemService,this.router=router}return ItemListComponent.prototype.ngOnInit=function(){var _this=this;console.log("ItemListComponent instantiated with the following type "+this.class);var s=null;switch(this.class){case"latest":default:this.title="Latest Items",s=this.itemService.getLatest();break;case"most-viewed":this.title="Most Viewed Items",s=this.itemService.getMostViewed();break;case"random":this.title="Random Items",s=this.itemService.getRandom()}s.subscribe(function(items){return _this.items=items},function(error){return _this.errorMessage=error})},ItemListComponent.prototype.onSelect=function(item){this.selectedItem=item,console.log("Item with Id "+this.selectedItem.Id+" has been selected: loading ItemDetailComponent..."),this.router.navigate(["item",this.selectedItem.Id])},ItemListComponent}(),__decorate([core_1.Input(),__metadata("design:type",String)],ItemListComponent.prototype,"class",void 0),ItemListComponent=__decorate([core_1.Component({selector:"ItemList",templateUrl:"./Templates/ItemList.component.html",styleUrls:["./Styles/ItemList.component.css"]}),__metadata("design:paramtypes",[Item_Service_1.ItemService,router_1.Router])],ItemListComponent),exports_1("ItemListComponent",ItemListComponent)}}});
//# sourceMappingURL=ItemList.component.js.map
