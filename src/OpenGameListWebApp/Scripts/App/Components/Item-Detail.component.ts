import { Component, Input } from "@angular/core";
import { Item } from "../Models/Item";

@Component({
    selector: "Item-Detail",
    templateUrl: './Templates/Item-Detail.component.html',
    styleUrls: ['./Styles/Item-Detail.component.css']
})

export class ItemDetailComponent {
    @Input("item") item: Item;
}

