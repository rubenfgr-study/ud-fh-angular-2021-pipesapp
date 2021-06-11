import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [],
})
export class NotCommonsComponent {
  // i18nSelect
  name: string = 'Rubén Francisco';
  gender: string = 'man';

  invitationMap = {
    man: 'invitarlo',
    woman: 'invitarla',
  };

  // i18nPlural
  clients: string[] = ['María', 'Pedro', 'Antonio'];

  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  changePerson() {
    if (this.gender === 'man') {
      this.name = 'Lucia';
      this.gender = 'woman';
    } else {
      this.name = 'Rubén';
      this.gender = 'man';
    }
  }

  removeClient() {
    this.clients.pop();
  }

  person = {
    name: 'Rubén',
    age: 33,
    address: 'Almería, España',
  };

  heroes = [
    {
      name: 'Superman',
      fly: true,
    },
    {
      name: 'Robin',
      fly: false,
    },
    {
      name: 'Aquaman',
      fly: false,
    },
  ];

  // Async Pipe
  myObservable = interval(1000);

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promesa resuelta');
    }, 3000);
  });
}
