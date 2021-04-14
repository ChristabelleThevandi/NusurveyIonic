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
  genderTypes: string[];
  genderSelected: string;

  constructor(private router: Router, public sessionService: SessionService, private userService: UserService) { 
   
    this.genderTypes = ["Female", "Male", "Other"];
    this.submitted = false;
    this.resultError = false;
    this.resultSuccess = false;
  }

  ngOnInit() {
    this.user = this.sessionService.getCurrentUser();
    this.userToUpdate = new User();
    this.userToUpdate.email = this.user.email;
    this.userToUpdate.first_name = this.user.first_name;
    this.userToUpdate.last_name = this.user.last_name;
    this.genderSelected = this.user.gender;
  }

  clear() {
    this.userToUpdate = new User();
  }


  updateProfile(updateProfileForm: NgForm)
  {
    this.submitted = true;
    if (updateProfileForm.valid)
    {
      if (this.genderSelected === "Female") {
        this.userToUpdate.gender = "FEMALE";
      } else if(this.genderSelected === "Male") {
        this.userToUpdate.gender = "MALE";
      } else {
        this.userToUpdate.gender = "OTHERS";
      }

      this.userService.updateProfile(this.userToUpdate).subscribe(
        response => {
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Updated Profile";
          this.user.first_name = this.userToUpdate.first_name;
          this.user.last_name = this.userToUpdate.last_name;
          this.user.gender = this.userToUpdate.gender;
          this.sessionService.setCurrentUser(this.user);
          console.log(this.user);
          this.router.navigate(["/view-profile"])
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
