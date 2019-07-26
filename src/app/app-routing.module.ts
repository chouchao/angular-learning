import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateObservableComponent } from './create-observable/create-observable.component';
import { ApplyOperatorsComponent } from './apply-operators/apply-operators.component';
import { MulticastComponent } from './multicast/multicast.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent, pathMatch: 'full' },
{ path: 'create-observable', component: CreateObservableComponent },
{ path: 'apply-operators', component: ApplyOperatorsComponent },
{ path: 'multicast', component: MulticastComponent },
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
