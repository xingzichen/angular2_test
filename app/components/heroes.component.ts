import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {HeroService} from '../service/hero.service';
//import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from '../hero';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'my-heroes',
    templateUrl: './app/components/heroes.component.html',
    styleUrls: ['./app/components/heroes.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class HeroesComponent implements OnInit {
    public heroes: Hero[];
    public selectedHero: Hero;

    constructor(private _heroService: HeroService, private _router: Router) { }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    goBack(){
        history.back();
    }

    goToTabTest(){
        this._router.navigate(['TabsShow']);
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */