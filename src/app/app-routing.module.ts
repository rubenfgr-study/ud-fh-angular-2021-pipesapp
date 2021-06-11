import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NotCommonsComponent } from './sales/pages/not-commons/not-commons.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { OrderedComponent } from './sales/pages/ordered/ordered.component';

const routes: Routes = [
  { path: '', component: BasicsComponent, pathMatch: 'full' },
  { path: 'numbers', component: NumbersComponent },
  { path: 'not-commons', component: NotCommonsComponent },
  { path: 'ordered', component: OrderedComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
