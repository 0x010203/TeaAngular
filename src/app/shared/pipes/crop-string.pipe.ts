import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cropString'
})
export class CropStringPipe implements PipeTransform {

  transform(value: string, length: number): string {
    if (length <= 0 || value.length <= length) {return value} else
    {
      return  value.slice(0, length) + '...'
    };
  }


}
