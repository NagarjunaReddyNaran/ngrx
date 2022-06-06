import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from  '@angular/common/http';
import { ProductEffects } from './state/product.effects';
import { productReducer } from './state/product.reducer';
import {MaterialExampleModule} from '../material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // StoreModule.forRoot({}, {}),
    StoreModule.forRoot({products:productReducer}),
    // StoreModule.forFeature('products', productReducer),
    BrowserAnimationsModule,
    MaterialExampleModule,
    EffectsModule.forRoot([ProductEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
