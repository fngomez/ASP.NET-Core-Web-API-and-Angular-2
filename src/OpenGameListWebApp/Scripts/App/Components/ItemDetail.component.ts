import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ItemService } from "../Services/Item.Service";
import { Item } from "../Models/Item";

@Component({
    selector: "ItemDetail",
    templateUrl: './Templates/ItemDetail.component.html',
    styleUrls: ['./Styles/ItemDetail.component.css']
})

export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(private itemService: ItemService, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        var id = +this.activatedRoute.snapshot.params['id'];

        if (id) {
            this.itemService.get(id).subscribe(item => this.item = item);
            console.log(this.item);
        } else {
            console.log("Invalid id: routing back to home...");
            this.router.navigate([""]);
        }
    }
}

