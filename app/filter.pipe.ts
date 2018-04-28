import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products : any, listFilter ?: any): any {
    if(listFilter === undefined) return products;

    return products.filter( function(p){

      return p.productname.toLowerCase().includes(listFilter.toLowerCase());
    })
  }

}
