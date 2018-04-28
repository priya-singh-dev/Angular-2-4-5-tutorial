import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
    selector: 'product-details',
    template: `<h1>We Are here with {{sub}} id</h1>
    <input type="button" value="Go Back" (click)="onBack()">`,
})
export class ProductDetails {
    title:string="Description";
    id : Number;
    private sub: any;

    constructor(private _route: ActivatedRoute ,private _router :Router){
        //console.log(this._route.snapshot.params['id']);
    }

    ngOnInit() {
        this.sub = this._route.snapshot.params['id'];    
    }   
   
    onBack():void{
        alert(1);
        this._router.navigate(['/products']);
    }

}