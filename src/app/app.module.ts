import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateObservableComponent } from './create-observable/create-observable.component';
import { ApplyOperatorsComponent } from './apply-operators/apply-operators.component';
import { MulticastComponent } from './multicast/multicast.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateObservableComponent,
    ApplyOperatorsComponent,
    MulticastComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
