import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './authntication/registration/registration.component';
import { LoginComponent } from './authntication/login/login.component';
import { ToastrModule } from 'ngx-toastr';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfgenratorComponent } from './pdfgenrator/pdfgenrator.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MulticheckboxComponent } from './multicheckbox/multicheckbox.component';
import { CarousalComponent } from './carousal/carousal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpObservablesComponent } from './http-observables/http-observables.component';
import { CountyService } from './shared/county.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AddStudentComponent } from './studentcrud/add-student/add-student.component';
import { EditStudentComponent } from './studentcrud/edit-student/edit-student.component';
import { StudentListComponent } from './studentcrud/student-list/student-list.component';
import { StudentDashboardComponent } from './studentcrud/student-dashboard/student-dashboard.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchServiceService } from './shared/search-service.service';
import { AuthService } from './shared/auth.service';
import { BlogComponent } from './blog/blog.component';
import { BlogService } from './shared/blog.service';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { ResetPasswordComponent } from './authntication/reset-password/reset-password.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ChartsModule } from 'ng2-charts';
import { MyBarChartComponent } from './chart/my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './chart/my-doughnut-chart/my-doughnut-chart.component';
import { MyRadarChartComponent } from './chart/my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './chart/my-pie-chart/my-pie-chart.component';
import { BarChartHomeComponent } from './chart/bar-chart-home/bar-chart-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    UserprofileComponent,
    LoadingSpinnerComponent,
    PdfgenratorComponent,
    MulticheckboxComponent,
    CarousalComponent,
    NoPageFoundComponent,
    ProductsComponent,
    ProductDetailComponent,
    HttpObservablesComponent,
    FileUploadComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentListComponent,
    StudentDashboardComponent,
    BlogComponent,
    BlogDetailsComponent,
    AddBlogComponent,
    ResetPasswordComponent,
    MyBarChartComponent,
    MyDoughnutChartComponent,
    MyRadarChartComponent,
    MyPieChartComponent,
    BarChartHomeComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    AngularFireStorageModule,
    ChartsModule
  ],
  providers: [SearchServiceService, AuthService, AngularFirestore, CountyService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
