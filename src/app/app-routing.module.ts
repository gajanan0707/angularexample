import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { LoginComponent } from './authntication/login/login.component';
import { RegistrationComponent } from './authntication/registration/registration.component';
import { ResetPasswordComponent } from './authntication/reset-password/reset-password.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

import { BlogComponent } from './blog/blog.component';
import { BarChartHomeComponent } from './chart/bar-chart-home/bar-chart-home.component';
import { MyBarChartComponent } from './chart/my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './chart/my-doughnut-chart/my-doughnut-chart.component';
import { MyPieChartComponent } from './chart/my-pie-chart/my-pie-chart.component';
import { MyRadarChartComponent } from './chart/my-radar-chart/my-radar-chart.component';
import { HomeComponent } from './home/home.component';
import { HttpObservablesComponent } from './http-observables/http-observables.component';
import { MulticheckboxComponent } from './multicheckbox/multicheckbox.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { PdfgenratorComponent } from './pdfgenrator/pdfgenrator.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { AddStudentComponent } from './studentcrud/add-student/add-student.component';
import { EditStudentComponent } from './studentcrud/edit-student/edit-student.component';
import { StudentDashboardComponent } from './studentcrud/student-dashboard/student-dashboard.component';
import { StudentListComponent } from './studentcrud/student-list/student-list.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'others', component: MulticheckboxComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'flagsearch', component: HttpObservablesComponent },
  { path: 'studentdashboard', component: StudentDashboardComponent },
  { path: 'register-student', component: AddStudentComponent },
  { path: 'view-students', component: StudentListComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'blog-details/:BlogId', component: BlogDetailsComponent },
  { path: 'add-blog', component: AddBlogComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'bar-charthome', component: BarChartHomeComponent },
  { path: 'bar-chart', component: MyBarChartComponent },
  { path: 'doughnut-chart', component: MyDoughnutChartComponent },
  { path: 'radar-chart', component: MyRadarChartComponent },
  { path: 'pie-chart', component: MyPieChartComponent },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
