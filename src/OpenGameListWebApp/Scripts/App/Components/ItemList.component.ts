import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Item } from "../Models/Item";
import { ItemService } from "../Services/Item.Service";

@Component({
    selector: 'ItemList',
    templateUrl: './Templates/ItemList.component.html',
    styleUrls: ['./Styles/ItemList.component.css']
})

export class ItemListComponent implements OnInit
{
    @Input() class: string;
    title: string;
    selectedItem: Item;
    items: Item[];
    errorMessage: string;

    constructor(private itemService: ItemService, private router: Router) { }

    ngOnInit()
    {
        console.log("ItemListComponent instantiated with the following type " + this.class);
        var s = null;

        switch (this.class) {
            case "latest":
            default:
                this.title = "Latest Items";
                s = this.itemService.getLatest();
                break;

            case "most-viewed":
                this.title = "Most Viewed Items";
                s = this.itemService.getMostViewed();
                break;

            case "random":
                this.title = "Random Items";
                s = this.itemService.getRandom();
                break;
        }

        s.subscribe(
            items => this.items = items,
            error => this.errorMessage = <any>error
        );
    }

    onSelect(item: Item)
    {
        this.selectedItem = item;
        console.log("Item with Id " + this.selectedItem.Id + " has been selected: loading ItemDetailComponent...");
        this.router.navigate(["item", this.selectedItem.Id]);
    }

}
