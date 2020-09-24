import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  studentsRef:any    // Reference to Student data list, its an Observable
  studentRef:any;   // Reference to Student object, its an Observable too

  constructor(private db: AngularFireDatabase, public firestore: AngularFirestore) { }


  // Create Student
  AddStudent(student: Student) {
    return this.firestore.collection('studentsdata').add({
      studentId: student.uid,
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      mobileNumber: student.mobileNumber
    })
  }

  // Fetch Single Student Object
  GetStudent(id: string) {
    this.studentRef = this.firestore.collection('studentsdata/' + id);
    return this.studentRef;
  }

  // Fetch Students List
  GetStudentsList() {
    this.studentsRef = this.firestore.collection('studentsdata');
    return this.studentsRef;
  }  

  // Update Student Object
  UpdateStudent(student: Student) {
    this.studentRef.update({
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      mobileNumber: student.mobileNumber
    })
  }  

  // Delete Student Object
  DeleteStudent(id: string) { 
    this.studentRef = this.firestore.collection('studentsdata/'+id);
    this.studentRef.delete();
  }
}
