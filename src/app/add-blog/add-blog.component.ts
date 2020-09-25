import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../shared/blog.service';



@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  ImageUrl: string;
  isloading: boolean
  form = new FormGroup({
    Title: new FormControl('', Validators.required),
    Author: new FormControl('', Validators.required),
    Description: new FormControl('', Validators.required),
    ImageUrl: new FormControl('')
  });
  constructor(public blogservice: BlogService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.blogservice.add_blog(this.form.value)
    console.log(this.form.value)
    this.router.navigate(['blogs'])

  }



}
