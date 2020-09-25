import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService,public router: Router) { }

  ngOnInit(): void {

  }

  crateBlog(){
   const currenUser=this.authService.currentUserValue;
   if(currenUser){
     this.router.navigate(['add-blog'])
   }
   else{
     this.router.navigate(['login'])
   }
  }

}
