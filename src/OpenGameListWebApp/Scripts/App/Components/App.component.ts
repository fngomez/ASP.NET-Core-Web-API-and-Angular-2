import { Component } from "@angular/core";

@Component({
    selector: "opengamelist",
    template: `
                <h1>{{title}}</h1>
                <Item-List></Item-List>`
})

export class AppComponent
{
    title = "OpenGameList";
}