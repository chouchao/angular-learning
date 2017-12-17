import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FolderTreeComponent } from './folder-tree/folder-tree.component';
import { FolderTreeService } from './folder-tree/folder-tree.service';
import { CounterComponent } from './counter.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    AppComponent,
    FolderTreeComponent,
    CounterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FolderTreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
