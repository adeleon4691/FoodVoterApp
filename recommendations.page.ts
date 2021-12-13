import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ReviewandquesService } from '../shared/reviewandques.service';
@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.page.html',
  styleUrls: ['./recommendations.page.scss'],
})
export class RecommendationsPage implements OnInit {


  constructor(public alertController: AlertController, public dataService: ReviewandquesService) { }

  ngOnInit() {
  }

  reviews = [

  ]

  getReviews(){
    return this.reviews
  }

  needRec() {
    console.log("Asking for recommendation...");
    this.reviewPrompt();
  }

  async reviewPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Write a Review or Ask a Question!',
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
            console.log('Submitting Your Review')
          },
        },
      ],
    });
    await alert.present();
  }

}