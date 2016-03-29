/**
 * Created by Giraffee on 29/3/2016.
 */

import {Component, DynamicComponentLoader, ElementRef} from 'angular2/core'
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Router} from "angular2/router";
import {TabsComponent} from "./tabs.component";

@Component({
    selector:'tabs-show',
    templateUrl:'app/components/tabs-show.component.html',
    directives:[ROUTER_DIRECTIVES, TabsComponent]
})

export class TabsShowComponent{

    constructor(private _router:Router){

    }
}
