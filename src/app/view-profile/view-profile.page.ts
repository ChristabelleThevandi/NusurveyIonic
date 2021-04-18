import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Tag } from '../models/tag';
import { CreditCard } from '../models/credit-card';
import { CreditCardService } from '../services/credit-card.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  user : User;
  creditCard : CreditCard;
  hasCreditCard : boolean;
  resultSuccess : boolean;
  resultError : boolean;
  message : string;
  tags:Tag[];
  imgPath: string;
  hasAvatar: boolean;

  constructor(private router: Router, private userService: UserService, public sessionService: SessionService, public alertController: AlertController,
    private creditCardService: CreditCardService) { 
    this.hasCreditCard = false;
    this.resultError = false;
    this.resultSuccess = false;
    this.user = this.sessionService.getCurrentUser();
    this.tags = this.user.tags;
    this.imgPath = this.user.avatar;
    this.hasAvatar = false;
  }

  ngOnInit() {
    this.user = this.sessionService.getCurrentUser();
    if (this.user.creditCard != undefined) {
      this.hasCreditCard = true;
      this.creditCard = this.user.creditCard;
    } else {
      this.hasCreditCard = false;
    }
    if (this.user.tags != undefined)
    {
      this.tags = this.user.tags;
    }

    if (this.user.avatar != undefined)
    {
      this.hasAvatar = true;
    } else {
      this.hasAvatar = false;
    }

  }

  ionViewWillEnter() {
    this.message = "";
    this.user = this.sessionService.getCurrentUser(); 
    if (this.user.creditCard != undefined) {
      this.hasCreditCard = true;
      this.creditCard = this.user.creditCard;
    } else {
      this.hasCreditCard = false;
    }
    if (this.user.tags != undefined)
    {
      this.tags = this.user.tags;
    }
    if (this.user.avatar != undefined)
    {
      this.hasAvatar = true;
      this.imgPath = this.user.avatar;
    } else {
      this.hasAvatar = false;
    }
  }

  updateProfile() {
    this.router.navigate(["/update-profile"])
  }

  updateCreditCard() {
    this.router.navigate(["/update-credit-card"])
  }

  updateTag() {
    this.router.navigate(["/update-tag"])
  }

  async deleteCreditCard() {
    const alert = await this.alertController.create({
      header: 'Confirm Delete Product',
      message: 'Confirm delete product <strong>' + this.creditCard.card_number + '</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Okay',
          handler: () => {
            this.creditCardService.deleteCreditCard(this.user).subscribe(
              response => {
                this.resultSuccess = true;
                this.resultError = false;
                this.creditCard = null;
                this.hasCreditCard = false;
                this.user.creditCard = undefined;
                this.message = "Deleted Credit Card!"
                this.sessionService.setCurrentUser(this.user);
              },
              error => {
                this.resultError = true;
                this.resultSuccess = false;
                this.message = "An error has occured while updating the profile: " + error;
                console.log("****** UpdateProductComponent.ts: " + error);
              }
            );
          }
        }
      ]
    });

    await alert.present();    
  }

  back() {
    this.router.navigate(["/index"])
  }
}
