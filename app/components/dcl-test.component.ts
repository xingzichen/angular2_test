import {DynamicComponentLoader} from "angular2/core";
import {ElementRef} from "angular2/core";
import {About} from "./about.component";
import {Component} from "angular2/core";
/**
 * Created by Giraffee on 22/3/2016.
 */


@Component({
    selector: 'dcl-test',
    template: '<div #child></div>'
})

export class DclTestComponent{
    constructor(dcl: DynamicComponentLoader, elementRef: ElementRef) {
        dcl.loadIntoLocation(About, elementRef, 'child');
    }
}