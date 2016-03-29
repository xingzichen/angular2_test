import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HeroService} from './service/hero.service';
import {AppComponent} from './app.component';
import {provide} from "angular2/core";
import {LocationStrategy, HashLocationStrategy} from "angular2/router";


bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HeroService,provide(LocationStrategy, {useClass: HashLocationStrategy})
]);


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */