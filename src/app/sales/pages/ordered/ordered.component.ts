import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interfaces';
import { HeroProperty } from '../../pipes/sort.pipe';

@Component({
  selector: 'app-ordered',
  templateUrl: './ordered.component.html',
  styles: [],
})
export class OrderedComponent implements OnInit {
  toUpperCase: boolean = true;
  heroProperty = HeroProperty;
  propertySelected: HeroProperty = HeroProperty.name;

  heroes: Hero[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.azul,
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.negro,
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.verde,
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.rolo,
    },
    {
      name: 'Linterna Verde',
      fly: true,
      color: Color.verde,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  changeOrder(heroProperty: HeroProperty) {
    this.propertySelected = heroProperty;
  }
}
