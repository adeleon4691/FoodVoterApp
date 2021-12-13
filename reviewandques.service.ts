//This page will push the information that is gathered to the Firebase database

import { Injectable } from '@angular/core';
import { Review } from './ReviewandQues';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ReviewandquesService {
  reviewQuesListRef: AngularFireList <any>;
  reviewQuesRef: AngularFireList <any>;

  constructor(private db: AngularFireDatabase) { }

  writeReviewQues(rq:Review) {
    return this.reviewQuesListRef.push({
      name: rq.firstname,
      city: rq.city,
      state: rq.state,
      restaraunt: rq.restaraunt,
      comment: rq.comment
    })
  }

  getReviewList(){
    this.reviewQuesListRef = this.db.list('/reviews')
  }

  
}
