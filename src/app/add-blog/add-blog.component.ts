import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: any;
  uploadState: Observable<string>;

  constructor(public blogservice: BlogService, public router: Router,private afStorage: AngularFireStorage) { }
  
  ngOnInit() {
  }
  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.downloadURL = this.task;
  }

  onSubmit() {
    this.blogservice.add_blog(this.form.value)
    console.log(this.form.value)
    this.router.navigate(['blogs'])

  }



}
