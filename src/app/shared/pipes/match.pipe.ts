import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'match'
})
export class MatchPipe implements PipeTransform {

  transform(itemList: any[], matchPattern: string, matchValueFn? : ((item, label) => string), label? : string): any {
    if (!matchPattern) {
      return itemList;
    }
    return itemList.filter(
      item => (matchValueFn ? matchValueFn(item, label) : item).toUpperCase().includes(matchPattern.toUpperCase()));
  }

}