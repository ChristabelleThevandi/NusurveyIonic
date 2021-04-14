import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {

  submitted: boolean;
  resultError: boolean;
  resultSuccess: boolean;
  message: string;
  user : User;
  userToUpdate : User;

  constructor(private router: Router, public sessionService: SessionService, private userService: UserService) { 
    this.user = this.sessionService.getCurrentUser();
    this.submitted = false;
    this.resultError = false;
    this.resultSuccess = false;
    this.userToUpdate = new User();
  }

  ngOnInit() {
  }

  updateProfile(updateProfileForm: NgForm)
  {
    this.submitted = true;
    if (updateProfileForm.valid)
    {
      let message : string;
      this.userService.updateProfile(this.userToUpdate).subscribe(
        response => {
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Updated profile successfully";
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occured while updating the profile: " + error;
          console.log("****** UpdateProductComponent.ts: " + error);
        }
      )
    }
  }

  back() {
    this.router.navigate(["/view-profile"])
  }
}
