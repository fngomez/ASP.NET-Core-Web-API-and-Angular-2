import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./Components/Home.component";
import { AboutComponent } from "./Components/About.component";
import { LoginComponent } from "./Components/Login.component";
import { PageNotFoundComponent } from "./Components/PageNotFound.component";
import { ItemDetailComponent } from "./Components/ItemDetail.component";

const appRoutes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        redirectTo: ""
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "item/:id",
        component: ItemDetailComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const AppRoutingProviders: any[] = [
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);