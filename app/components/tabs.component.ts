/**
 * Created by Giraffee on 29/3/2016.
 */
import {Component, DynamicComponentLoader, ElementRef} from 'angular2/core'
import {TabComponent} from "./tab.component";
import {NgFor} from "angular2/common";
import {AfterViewInit} from "angular2/core";
import {$TAB} from "angular2/src/core/change_detection/parser/lexer";
import {Injector} from "angular2/core";
import {ComponentRef} from "angular2/core";

@Component({
    selector:'tabs',
    templateUrl:'app/components/tabs.component.html',
    directives: [NgFor, TabComponent]
})

export class TabsComponent implements AfterViewInit{
    public tabs:TabComponent[];

    public refs:ComponentRef[];

    constructor(private _dynamicComponentLoader:DynamicComponentLoader,
    private _elementRef:ElementRef, private _injector:Injector){
        this.tabs = [];
        this.refs = [];

        // mock
        var i = 0;
        while(i < 2){
            var tab:TabComponent = {id:0, title:"Tab ", active:false, content:""};
            tab.id = i;
            tab.title += i;
            tab.content = "content "+i;
            this.addTab(tab);
            i++;
        }
    }

    selectTab(tab){

        _activeTab(this.refs, tab.id);
        _deactivateAllTabs(this.tabs);
        tab.active = true;
        //this.activeContent = tab.content;
        //this.showTab(tab);
        //console.log("tab = "+tab.content+", active = "+tab.active);

        function _deactivateAllTabs(tabs: TabComponent[]){
            tabs.forEach((t)=>{
                t.active = false;
                console.log("tab = "+t.content+", active = "+t.active);
            });
        }
        function _activeTab(rs: ComponentRef[], id:number){
            console.log("find id = "+id);
            rs.forEach((t)=>{
                if(t.instance.id === id){
                    t.instance.active = true;
                }else {
                    t.instance.active = false;
                }
                console.log("id = "+t.instance.id+", tab = "+t.instance.content+", active = "+t.instance.active);
            });
        }

    }

    showTab(tab){
        this._dynamicComponentLoader.loadIntoLocation(TabComponent, this._elementRef, "tabContent")
            .then( (res)=>{
                res.instance.id = tab.id;
                res.instance.content = tab.content;
                res.instance.title = tab.title;
                res.instance.active = tab.active;

                this.refs.push(res);
            });
    }

    addTab(tab:TabComponent){
        if(this.tabs.length === 0){
            tab.active = true;
        }
        this.tabs.push(tab);

    }

    ngAfterViewInit(){
        this.tabs.forEach((tab)=>{
            //if(tab.active === true){
               this.showTab(tab);
            //}
        });
    }
}