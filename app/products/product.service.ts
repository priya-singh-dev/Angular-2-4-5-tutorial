//import { Http , Response} from '@angular/http';
//import 'rxjs/add/operator/map';
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from '@angular/http';
import { IProduct } from "./product";

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()

export class ProductService{
        public token: string;


    private _productUrl = "./assets/Api/products.json";
    constructor(private _http: HttpClient){
        // set token if saved in local storage
                var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.token = currentUser && currentUser.token;
    }

    getProduct(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
    }

//     getProduct(): IProduct[]{

//    return [
//    {
//                 imageUrl:'./assets/images/bacg.jpg',
//                 productname:'Computer',
//                 productId: 15336,
//                 pavailable:'yes',
//                 pcode: 'gs34',
//                 pprice: 59.342,
//                 pstar: '3.8'
//             },
//             {
//                 productId: 2,
//                 pavailable:'no',
//                 pcode: 'ae2EA03',
//                 imageUrl:'./assets/images/hands.jpg',
//                 productname:'hfhf',
//                 pprice: 30.00,
//                 pstar:'3.4'
//              },
//              {
//                         productId: 3 ,
//                          pavailable: 'yes',
//                          pcode: 'a390e',
//                          imageUrl:'./assets/images/opl.jpg',
//                          productname:'hfhg',
//                         pprice: 400.89968,
//                         pstar:'4.2'

//                     },
//                     {
//                         productId: 4,
//                         pavailable:'no',
//                         pcode: '30a2',
//                         imageUrl:'./assets/images/lapi.jpg',
//                         productname:'hfj',
//                         pprice: 700.67635343,
//                         pstar:'4',

//                     },
//                     {
//                         productId: 5,
//                         pcode:'20a3',
//                         imageUrl:'./assets/images/pen.jpg',
//                         productname:'djfjg',
//                         pavailable : 'yes',
//                         pprice: 1000.009990,
//                         pstar: '5'

//                   },
//     ];
//     

login(username: string, password: string): Observable<boolean> {
            return this._http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
                .map((response: Response) => {
                    // login successful if there's a jwt token in the response
                    let token = response.json() && response.json().token;
                    if (token) {
                        // set token property
                        this.token = token;
     
                        // store username and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
     
                        // return true to indicate successful login
                        return true;
                    } else {
                        // return false to indicate failed login
                        return false;
                    }
                });
        }
     
        logout(): void {
            // clear token remove user from local storage to log user out
            this.token = null;
            localStorage.removeItem('currentUser');
        }
    }


