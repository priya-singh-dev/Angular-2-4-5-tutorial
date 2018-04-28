import { Pipe, PipeTransform } from "@angular/core/";
//import { Pipe } from "@angular/core/src/metadata/directives";
import { IProduct } from "./product";

@Pipe({
    name: 'filterPipe'
})

export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], filterB: string) : IProduct[]{
        filterB = filterB ? filterB.toLocaleLowerCase(): null;
        return filterB? value.filter((p: IProduct) => p.productname.toLocaleLowerCase().indexOf(filterB) !== -1): value;
    }

}