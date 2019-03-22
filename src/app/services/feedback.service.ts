import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';

import { FEEDBACKS } from '../shared/feedbacks';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})

export class FeedbackService {

  constructor(
    private http: HttpClient
    ) { }

    getFeedbacks(): Observable<Feedback[]> {
      return of(FEEDBACKS).pipe();
    }

  // getFeedbacks(): Observable<Feedback[]> {
  //   return this.http.get<Feedback[]>(baseURL + 'feedback');
  // }

  // ------------ FOR ADDING FEEDBACKS METHOD -------------------------------

  // addFeedbacks(fb: Feedback): Observable<Feedback[]> {
  //   return this.http.post<Feedback[]>(baseURL + 'shared/feedback', fb);
  // }

  //   addFeedbacks(fb: Feedback) {
  //    FEEDBACKS.push(fb);
  // }

  // addFeedbacks(fb: Feedback): Observable<Feedback[]> {
  //   return this.http.post<Feedback[]>(baseURL + 'feedback', fb);
  // }
}
