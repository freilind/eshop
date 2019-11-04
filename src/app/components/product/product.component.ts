import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { ApiClientService } from "../../services/api-client.service";
import { environment } from '../../../environments/environment';
import { Product } from '../../models/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, AfterViewInit {

  public product: Product;
  //public product: Product = {} 
  private id: string;

  constructor(
    public authService: AuthService,
    public apiClient: ApiClientService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.apiClient = apiClient;
    this.product = {};
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  //falta una mejor implementación para cargar la pagina. suscriptor.
  ngAfterViewInit() {
    setTimeout(() => {
      this.loadProduct(this.id);
    }, 500)
  }

  public async loadProduct(id): Promise<void> {
    try {
      this.product = await this.apiClient.get<Product>({
        url: environment.urlProductsByPartNumber.concat(id)
      });
    } catch (error) {
      console.error(error);
    }
  }

}
