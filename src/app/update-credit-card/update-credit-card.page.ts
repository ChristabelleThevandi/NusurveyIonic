import { Component, OnInit } from '@angular/core';

import { SessionService } from '../services/session.service';
import { CreditCardService } from '../services/credit-card.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CreditCard } from '../models/credit-card';
import { User } from '../models/user';
import { AddCreditCardReq } from '../models/add-credit-card-req';

@Component({
  selector: 'app-update-credit-card',
  templateUrl: './update-credit-card.page.html',
  styleUrls: ['./update-credit-card.page.scss'],
})
export class UpdateCreditCardPage implements OnInit {

  submitted:boolean;
  creditcard: CreditCard;
  tempDate: Date;
  user: User;
  message:string;
  successResponse:boolean;
  errorResponse:boolean;
  addCreditCardReq: AddCreditCardReq;
  expiry_date: Date;

  constructor(private router: Router, public sessionService: SessionService, private creditcardService: CreditCardService) {
    this.submitted = false;
    this.successResponse=false;
    this.errorResponse=false;
  }

  ngOnInit() {
    this.creditcard = new CreditCard();
    this.user = this.sessionService.getCurrentUser();
    this.addCreditCardReq = new AddCreditCardReq();
    this.addCreditCardReq.user=this.user;
  }

  back() {
    this.router.navigate(["/view-profile"]);
  }

  clear() {
    this.creditcard = new CreditCard();
  }

  updateCreditCard(updateCreditCardForm: NgForm) {
    
    this.submitted = true;

    if (updateCreditCardForm.valid) {
      this.successResponse= true;
      this.errorResponse = false;
      let temp = new Date(this.expiry_date);
      this.creditcard.expiry_date = temp.toDateString();
      this.addCreditCardReq.card = this.creditcard;
      this.creditcardService.updateCreditCard(this.addCreditCardReq).subscribe(
        response => {
          this.user.creditCard = this.creditcard;
          this.sessionService.setCurrentUser(this.user);
          console.log(this.user);
        },
        error => {
          this.successResponse= false;
          this.errorResponse = true;
          this.message = "An error has occured while updating the credit Card: " + error;
          console.log("****** UpdateCreditCardComponent.ts: " + error);
        }
      )
    }
  }
}
