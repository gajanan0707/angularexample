import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Blog } from '../models/Blog';
import { firestore as fs } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  id:''
  constructor(public afs:AngularFirestore) { }

  getSingleBlog(BlogId: string) {
    return this.afs.collection('blogs/').doc(BlogId).valueChanges();
}

  add_blog(data:Blog){
    return this.afs.collection('blogs').add({
      Title:data.Title,
      Description: data.Description,
      Author: data.Author,
      CreatedOn:fs.FieldValue.serverTimestamp(),
      ImageUrl:data.ImageUrl,
      BlogId:''
    })
}
}
