import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AppHeaderComponent } from './_layouts/app-header/app-header.component';
import { AppLayoutComponent } from './_layouts/app-layout/app-layout.component';
import { AppFooterComponent } from './_layouts/app-footer/app-footer.component';
import { SiteFooterComponent } from './_layouts/site-footer/site-footer.component';
import { SiteHeaderComponent } from './_layouts/site-header/site-header.component';
import { SiteLayoutComponent } from './_layouts/site-layout/site-layout.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { HighchartsChartModule } from 'highcharts-angular';
import { ProductsIndexComponent } from './_products/products-index/products-index.component';
import { ProductsNewComponent } from './_products/products-new/products-new.component';
import { ProductsEditComponent } from './_products/products-edit/products-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppLayoutComponent,
    AppFooterComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
    SiteLayoutComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    ProductsIndexComponent,
    ProductsNewComponent,
    ProductsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatStepperModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    HighchartsChartModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
