import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentProductListComponent } from './pages/product-list/content-product-list/content-product-list.component';
import { ContentProductComponent } from './pages/product/content-product/content-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full'
  },
  {
    path: 'product-list',
    title: 'Products',
    component: ContentProductListComponent,
  },
  {
    path: 'product/:id',
    title: 'Product',
    component: ContentProductComponent
  },
  {
    path: '**',
    redirectTo: 'product-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
