/**
 * Created by Giraffee on 22/3/2016.
 */
import {Component, View, DynamicComponentLoader, Injector, bind, Type, ElementRef} from 'angular2/core';

export class ComponentProvider {
    path:string;
    provide:{(module:any):any};
}

declare var System:any;

const PROXY_CLASSNAME = 'component-wrapper';
const PROXY_SELECTOR = `.${PROXY_CLASSNAME}`;

export function ComponentProxyFactory(provider:ComponentProvider):Type {
    @Component({
        selector: 'component-proxy',
        bindings: [bind(ComponentProvider).toValue(provider)]
    })
    @View({
        template: `<span #content/>`
    })
    class VirtualComponent {
        constructor(
            el: ElementRef,
            loader:DynamicComponentLoader,
            inj:Injector,
            provider:ComponentProvider) {
            System.import(provider.path)
                .then(m => {
                    loader.loadIntoLocation(provider.provide(m), el, 'content');
                });
        }
    }

    return VirtualComponent;
}