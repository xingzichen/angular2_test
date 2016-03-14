/**
 * Created by Giraffee on 10/3/2016.
 */

import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService} from './hero.service';
import {RouteRegistry, AsyncRoute, Router} from "angular2/router";

import {View} from "angular2/core";
import {componentProxyFactory} from "./component.proxy";

declare var System:any;


@Component({
    selector: 'angular2-test',
    providers: [HeroService]
})
@RouteConfig([
    {path: '/', name: 'Dashboard', component: DashboardComponent, useAsDefault:true},
    {path: '/heroes', name: 'Heroes', component: HeroesComponent},
    new  AsyncRoute({
        path: '/detail/:id',
        name: 'HeroDetail',
        loader: () => System.import('/app/hero-detail.component').then(m => m.HeroDetailComponent)
    })
])
@View({
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],

})
export class AppComponent {
    public title = 'Tour of Heroes';
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */