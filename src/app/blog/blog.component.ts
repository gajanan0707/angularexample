import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Blog } from '../models/Blog';
import { BlogService } from '../shared/blog.service';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogdata:any
  public isCollapsed = true;  
  blogsingle:any
  blogvalues:Blog[]

   
  constructor(public blogservice:BlogService,private afs: AngularFirestore,public router:Router) {

  
  }

  ngOnInit(): void {
    this.afs.collection('blogs').valueChanges().subscribe(m=>{
      this.blogdata=m
    })
  }

  getclick(BlogId){
      this.blogservice.getSingleBlog(BlogId).subscribe((blogvalues) => {
        this.router.navigate(['blog-details', BlogId]); 
    });
  }
  
 
  

}
