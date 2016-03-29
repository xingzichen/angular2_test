/**
 * Created by Giraffee on 10/3/2016.
 */

import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroesComponent} from './components/heroes.component';
import {DashboardComponent} from './components/dashboard.component';
import {HeroService} from './service/hero.service';
import {RouteRegistry, AsyncRoute, Router, Location} from "angular2/router";

import {View} from "angular2/core";
import {DynamicComponentLoader} from "angular2/core";
import {ElementRef} from "angular2/core";


declare var System:any;


@Component({
    selector: 'angular2-test',
    providers: [HeroService]
})
@RouteConfig([
    //{path: '/', redirectTo: ['Dashboard']},
    {path: '/', name: 'Dashboard', component: DashboardComponent, useAsDefault:true},
    {path: '/heroes', name: 'Heroes', loader: () => System.import('/app/components/heroes.component').then(m=>m.HeroesComponent)},
    {path: '/about', name: 'About', loader: () => System.import('/app/components/about.component').then(m=>m.About)},

    //{
    //    path: '/about',
    //    //component: ComponentProxyFactory({
    //    //    path: './components/about',
    //    //    provide: m => m.About
    //    //}),
    //    loader:()=> DynamicComponentLoader.load,
    //    name: 'About' },
    new  AsyncRoute({
        path: '/detail/:id',
        name: 'HeroDetail',
        loader: () => System.import('/app/components/hero-detail.component').then(m => m.HeroDetailComponent)
    }),
    new AsyncRoute({
        path: '/tabs',
        name: 'TabsShow',
        loader: () => System.import('/app/components/tabs-show.component').then(m => m.TabsShowComponent)
    })
])
@View({
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
})


export class AppComponent {
    public title = 'Tour of Heroes';

    constructor(private _router: Router, private _location: Location){

    }

    getLinkStyle(path) {

        if(path === this._location.path()){
            return true;
        }
        else if(path.length > 0){
            return this._location.path().indexOf(path) > -1;
        }
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */