import { Component, OnInit } from "@angular/core";
import { Item } from "../Models/Item";
import { ItemService } from "../Services/Item.Service";

@Component({
    selector: 'Item-List',
    template: `
        <h2>Latest Items</h2>
        <ul class="items">
            <li *ngFor="let item of items"
                [class.selected]="item == selectedItem"
                (click)="onSelect(item)">
                <span>{{item.Title}}</span>
            </li>
        </ul>`,
    styles: [`
        ul.items li {
            cursor: pointer;
        }

        ul.items li.selected {
            background-color: #cccccc;
        }
    `]
})

export class ItemListComponent implements OnInit
{
    selectItem: Item;
    items: Item[];
    errorMessage: string;

    constructor(private itemService: ItemService) { }

    ngOnInit()
    {
        this.getLatest();
    }

    getLatest()
    {
        this.itemService.getLatest().subscribe(latestItems => this.items = latestItems,
                                                error => this.errorMessage = <any>error);
    }

    onSelect(item: Item)
    {
        this.selectItem = item;
        console.log("Item with Id " + this.selectItem.Id + " has been selected.");
    }

}
