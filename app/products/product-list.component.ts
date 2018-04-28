import {Component, OnInit, OnChanges} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
//import { FilterPipe } from '../filter.pipe';

@Component({
    selector:'product-list',
    //template: `testing`
    templateUrl: 'product-list.component.html',
    styleUrls: ['product.component.css'],

})
export class ProductListComponent{
    pageTitle : string  = 'Product List';
    showImage : boolean = true;
    listFilter : string;
    message : string ;
    toggleImage(): void{
        this.showImage = !this.showImage;
    }


     products: IProduct[];
    // products: IProduct[]
    //     {
    //         imageUrl:'./assets/images/bacg.jpg',
    //         productname:'Computer',
    //         productId: 1,
    //         pavailable:'yes',
    //         pcode: 'gs34',
    //         pprice: 59.342,
    //         pstar: '****'
    //     }, 
    //     {
    //         productId: 2, 
    //         pavailable:'no',
    //         pcode: 'ae23',
    //         imageUrl:'./assets/images/hands.jpg',
    //         productname:'hfhf',
    //         pprice: 30.00,
    //         pstar:'***'
      
    //      },
    //     {
    //         productId: 3 , 
    //          pavailable: 'yes',
    //          pcode: 'a390e',
    //          imageUrl:'./assets/images/opl.jpg',
    //          productname:'hfhg',
    //         pprice: 400.89968,
    //         pstar:'*****'
      
    //     },
    //     {
    //         productId: 4, 
    //         pavailable:'no',
    //         pcode: '30a2',
    //         imageUrl:'./assets/images/lapi.jpg',
    //         productname:'hfj',
    //         pprice: 700.67635343,
    //         pstar:'****',
      
    //     },
    //     {
    //         productId: 5,
    //         pcode:'20a3',
    //         imageUrl:'./assets/images/pen.jpg',
    //         productname:'djfjg',
    //         pavailable : 'yes',
    //         pprice: 1000.009990,
    //         pstar: '*****'
      
    //     },
    //];

    // onNotify(message:string): void {
    //   this.pageTitle ='product list:' +message;
    // }
    ngOnInit(){
        
      //  console.log("lifecycle init calling")
    }
    constructor(private _ProductService: ProductService){
    this._ProductService.getProduct().subscribe(products => this.products = products);
    //this.products = this._ProductService.getProduct();

        console.log("hello")
    }
    ngOnChange(){
  // console.log("jhuxhw");
    }
}