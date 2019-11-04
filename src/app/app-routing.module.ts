import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '../app/components/products/products.component';
import { ProductComponent } from '../app/components/product/product.component';
import { SigninComponent } from '../app/components/signin/signin.component';
import { AuthGuard } from '../app/guard/auth.guard';

const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
  {path: 'products/:id', component: ProductComponent, canActivate: [AuthGuard]},
  {path: '**',redirectTo: '/page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
