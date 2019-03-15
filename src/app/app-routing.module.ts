import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from './_layouts/app-layout/app-layout.component';
import { SiteLayoutComponent } from './_layouts/site-layout/site-layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

import { ProductsIndexComponent } from './_products/products-index/products-index.component';
import { ProductsNewComponent } from './_products/products-new/products-new.component';

const routes: Routes = [
  {
        path: '',
        component: SiteLayoutComponent,
        children: [
          { path: '', component: HomeComponent, pathMatch: 'full'}
        ]
  },
  {
        path: '',
        component: AppLayoutComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'products', component: ProductsIndexComponent},
          { path: 'products/new', component: ProductsNewComponent}
        ]
  },
  { path:"login", component:LoginComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
