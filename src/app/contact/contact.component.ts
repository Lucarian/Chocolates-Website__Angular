
import { Component, OnInit, Inject } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { FeedbackService } from '../services/feedback.service';

import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  feedbacks: Feedback[];

  feedbackForm: FormGroup;
  fb: Feedback;
  
 // ------------------------------------------------------------------------------------------

  constructor(private feedbackService: FeedbackService,
     @Inject ('BaseURL') public BaseURL,
     private fbformbuilding: FormBuilder ) { this.createForm(); }

  ngOnInit() {

    this.feedbackService.getFeedbacks().subscribe(feedbacks => this.feedbacks = feedbacks);
  }

 // ------------------------------------------------------------------------------------------

  createForm() {
    this.feedbackForm = this.fbformbuilding.group({
      firstname: '',
      lastname: '',
      message: ''
    });
  }

  onSubmitFeedback() {
    
    this.fb = this.feedbackForm.value;
    this.fb.date = new Date().toISOString();

    console.log(this.fb);
    this.feedbacks.push(this.fb);

    this.feedbackService.addFeedbacks(this.fb).subscribe();
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      message: ''
    });
  }

}
