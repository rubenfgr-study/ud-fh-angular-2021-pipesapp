import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'ruBén FRanCisco gazqUez RosaleS';
  age: number = 33;
  obj = {
    name: 'Rubén',
    lastname: 'Gazquez',
  };
}
