import { NgModule } from '@angular/core';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    TableModule,
    FieldsetModule,
    ToolbarModule,
  ],
})
export class PrimeNgModule {}
