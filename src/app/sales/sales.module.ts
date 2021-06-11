import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom modules
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

// Components
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderedComponent } from './pages/ordered/ordered.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { FlyColorPipe } from './pipes/fly-color.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderedComponent,
    MayusculasPipe,
    FlyPipe,
    FlyColorPipe,
    SortPipe,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderedComponent,
  ],
})
export class SalesModule {}
