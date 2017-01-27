///<reference path="../../typings/index.d.ts"/>

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import "rxjs/Rx";

import { AppComponent } from "./Components/App.component";
import { ItemListComponent } from "./Components/Item-List.component";
import { ItemDetailComponent } from "./Components/Item-Detail.component";

import { ItemService } from "./Services/Item.Service";

@NgModule({
    // Directives, components, and pipes
    declarations: [
        AppComponent,
        ItemListComponent,
        ItemDetailComponent
    ],
    // Modules
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    // Providers
    providers: [
        ItemService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
