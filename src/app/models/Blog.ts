import { firestore } from 'firebase';

export interface Blog {
    BlogId: string;
    Title: string;
    Description: string;
    Author: string;
    ImageUrl:string
    CreatedOn:firestore.Timestamp;
}