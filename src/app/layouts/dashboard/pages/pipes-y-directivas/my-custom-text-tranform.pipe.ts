import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomTextTranform',
})
export class MyCustomTextTranformPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (args[0] === 'u') {
      return value.toUpperCase();
    } else {
      return value.toLowerCase();
    }
  }
}
