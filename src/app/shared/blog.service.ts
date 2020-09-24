import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Blog } from '../models/Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public afs:AngularFirestore) { }

  
}
