/**
 * Created by Giraffee on 29/3/2016.
 */

import {Component} from 'angular2/core'
import {Input} from "angular2/core";

@Component({
    selector:'',
    templateUrl:'./app/component/tab.component.html'
})

export class TabComponent{
    public title:string;
    public active = false;
    public content = "";
}