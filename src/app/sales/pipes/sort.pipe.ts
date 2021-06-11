import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interfaces';

export enum HeroProperty {
  name = 'name',
  fly = 'fly',
  color = 'color',
}

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(heroes: Hero[], property: HeroProperty): Hero[] {
    return heroes.sort((a, b) => {
      return a[property] === b[property]
        ? 0
        : a[property] > b[property]
        ? 1
        : -1;
    });
  }
}
