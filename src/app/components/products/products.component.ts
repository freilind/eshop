import { Component, OnInit, NgZone, AfterViewInit, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { ApiClientService } from "../../services/api-client.service";
import { environment } from '../../../environments/environment';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  public products: Product[];
  public product: Product = {}  

  constructor(
    public authService: AuthService,
    public apiClient: ApiClientService,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.apiClient = apiClient;
    this.products= [];
  }

  ngOnInit() {
     
   }

   //falta una mejor implementación para cargar la pagina. suscriptor.
   ngAfterViewInit(){
    setTimeout( ()=>{
      this.loadProducts();
    }, 1000)
  }

  public async loadProducts(): Promise<void> {
    try {
      this.products = await this.apiClient.get<Product[]>({
        url: environment.urlProductsByIdPartNumbers
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  goProduct(id){
    this.router.navigate([`products/${id}`])
  }

}
