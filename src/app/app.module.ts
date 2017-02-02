import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
    createStore,
    Store,
    StoreEnhancer
  } from 'redux';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

import { counterReducer } from './counter-reducer';
import { AppState } from './app-state';
import { AppStore } from './app-store';


let devtools: StoreEnhancer<AppState> =
    window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;


    
export function useFactory(): Store<AppState> {
    return createStore<AppState>(
            counterReducer,
            devtools);
      }



@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent],
  providers: [
              {provide: AppStore, useFactory: useFactory }
              ],
               

})
export class AppModule { }
