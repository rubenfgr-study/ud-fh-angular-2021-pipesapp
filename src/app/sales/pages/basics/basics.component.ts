import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  lowerName: string = 'ruben francisco';
  upperName: string = 'RUBEN FRANCISICO';
  name: string = 'rUbeN fRancIscO';

  date: Date = new Date();
  datePipes: string[] = ['fecha', 'fecha | date', "fecha | date: 'short'"];
}
