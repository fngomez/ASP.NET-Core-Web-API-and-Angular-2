///<reference path="../../typings/index.d.ts"/>

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import "rxjs/Rx";

import { AboutComponent } from "./Components/About.component";
import { AppComponent } from "./Components/App.component";
import { HomeComponent } from "./Components/Home.component";
import { ItemListComponent } from "./Components/ItemList.component";
import { ItemDetailComponent } from "./Components/ItemDetail.component";
import { LoginComponent } from "./Components/Login.component";
import { PageNotFoundComponent } from "./Components/PageNotFound.component";

import { AppRouting } from "./App.routing";

import { ItemService } from "./Services/Item.Service";

@NgModule({
    // Directives, components, and pipes
    declarations: [
        AboutComponent,
        AppComponent,
        HomeComponent,
        ItemListComponent,
        ItemDetailComponent,
        LoginComponent,
        PageNotFoundComponent
    ],
    // Modules
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,
        AppRouting
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
