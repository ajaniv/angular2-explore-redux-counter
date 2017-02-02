import { Component, Inject, OnInit } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from '../app-store';
import { AppState } from '../app-state';
import * as CounterActions from '../counter-action-creators';
@Component( {
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

    counter: number;

    constructor( @Inject( AppStore ) private store: Store<AppState> ) {
        store.subscribe(() => this.readState() );
        this.readState();
    }

    ngOnInit() {
    }

    readState() {
        const state: AppState = this.store.getState() as AppState;
        this.counter = state.counter;
    }

    increment() {
        this.store.dispatch( CounterActions.increment() );
    }

    decrement() {
        this.store.dispatch( CounterActions.decrement() );
    }




}
