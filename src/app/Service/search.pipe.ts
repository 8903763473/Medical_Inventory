import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  public transform(value: any, keys: any, term: any): unknown {
    if (!term) return value;
    var filteredData = (value || []).filter((item: any) => keys.split(',').some((key:any) => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
    return filteredData
  }

}
