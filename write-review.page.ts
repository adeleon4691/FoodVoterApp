import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ReviewandquesService } from '../shared/reviewandques.service';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.page.html',
  styleUrls: ['./write-review.page.scss'],
})
export class WriteReviewPage implements OnInit {

  constructor(public alertController: AlertController, public dataService: ReviewandquesService) { }

  ngOnInit() {
  }

  //holds a list of reviews
  reviews = [

  ]

  getReviews(){
    return this.reviews
  }

  writeReview() {
    console.log("Writing review...");
    this.reviewPrompt();
  }

  //prompt used to get the user input for reviews
  async reviewPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Write a Review!',
      inputs:[
        {
          name: 'name1',
          type: 'text',
          placeholder: 'First Name'
        },
        {
          name: 'name2',
          type: 'text',
          placeholder: 'Last Name'
        },
        {
          name:'city',
          type: 'text',
          placeholder: 'City'
        },
        {
          name: 'state',
          type: 'text',
          placeholder: 'State'
        },
        {
          name: 'restaraunt name',
          type: 'text',
          placeholder: 'Restaraunt Name'
        },
        {
          name: 'review',
          type: 'textarea',
          placeholder:'Comments'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Submit',
          role: 'submit',
          cssClass: 'primary',
          handler: data => {
            this.dataService.reviewQuesRef;
          },
        },
      ],
    });
    await alert.present();
  }

}
