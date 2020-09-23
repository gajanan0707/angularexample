import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './authntication/login/login.component';
import { RegistrationComponent } from './authntication/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { HttpObservablesComponent } from './http-observables/http-observables.component';
import { MulticheckboxComponent } from './multicheckbox/multicheckbox.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { PdfgenratorComponent } from './pdfgenrator/pdfgenrator.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'signup', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'userlist', component: PdfgenratorComponent },
  { path: 'others', component: MulticheckboxComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'flagsearch', component: HttpObservablesComponent },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
