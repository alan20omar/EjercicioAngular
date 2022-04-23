import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {

  transform(value: string): string {
    const replaceLetters = {
      a: '4',
      e: '3',
      i: '1',
      o: '0',
      u: '9'
    }
    return value.replace(/a|e|i|o|u/gi, (match: string) => replaceLetters[match as keyof typeof replaceLetters]);
  }

}
