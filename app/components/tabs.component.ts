/**
 * Created by Giraffee on 29/3/2016.
 */
import {Component} from 'angular2/core'
import {TabComponent} from "./tab.component";
import {NgFor} from "angular2/common";

@Component({
    selector:'tabs',
    templateUrl:'app/components/tabs.component.html',
    directives: [NgFor]
})

export class TabsComponent{
    public tabs:TabComponent[];

    public activeContent:string = "";

    constructor(){
        this.tabs = [];
        var i = 0;
        while(i < 2){
            var tab:TabComponent = {title:"Tab ", active:false, content:""};
            tab.title += i;
            tab.content = "content "+i;
            this.addTab(tab);
            i++;
        }
    }

    selectTab(tab){

        _deactivateAllTabs(this.tabs);
        tab.active = true;
        this.activeContent = tab.content;

        function _deactivateAllTabs(tabs: TabComponent[]){
            tabs.forEach((tab)=>tab.active = false);
        }

    }

    addTab(tab:TabComponent){
        if(this.tabs.length === 0){
            tab.active = true;
            this.activeContent = tab.content;
        }
        this.tabs.push(tab);
    }
}