import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'flyColor',
})
export class FlyColorPipe implements PipeTransform {
  transform(colorNumber: number): string {
    return Color[colorNumber];
  }
}
