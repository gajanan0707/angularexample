import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BlogService } from '../shared/blog.service';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogdata:any
  public isCollapsed = true;  

  
  constructor(public blogservice:BlogService,private afs: AngularFirestore) {

  
  }

  ngOnInit(): void {
    this.afs.collection('blogs').valueChanges().subscribe(m=>{
      this.blogdata=m
      console.log('blogdata',this.blogdata)
    })
  }
  
 
  

}
