import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { FacultyType } from '../models/faculty-type.enum';
import { GenderType } from '../models/gender-type.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  submitted: boolean;
  user: User;
  // email: string;
  // password: string;
  // first_name: string;
  // last_name: string;
  // gender: GenderType;
  // faculty: FacultyType;
  // birth_date: Date;
  // major: string;
  genderTypes: string[];
  facultyTypes: string[];
  genderSelected: string;
  facultySelected: string;
  registerError: boolean;
  errorMessage: string;
  tempDate: Date;

  constructor(private router: Router, public sessionService: SessionService, private userService: UserService) {
    this.submitted = false;
    this.user = new User();
    this.genderTypes = ["Female", "Male", "Other"];
    this.facultyTypes = ["Art and Social Sciences", "Business", "Computing", "Employee", "Science", "Engineering", "YST", "Law", "Medicine", "Dentistry", "Design and Environment", "Public Health",
  "Public Policy", "Continuing and LifeLong", "Integrative Sciences and Engineering", "Yale NUS", "Duke NUS", "USP"];
    
  }

  ngOnInit() {
  }

  clear() {
    this.user = new User();
  }

  userRegister(userRegisterForm: NgForm) {
    
    this.submitted = true;

    if (userRegisterForm.valid) {
      var splitted = this.user.email.split("@");
      if (splitted.length !== 2 || splitted[1] !== "u.nus.edu") {
        this.registerError = true;
        this.errorMessage = "Please use an NUS Email";
        console.log("HIIIIIIIIIIIIIZ");
        return;
      } 

      let temp = new Date(this.tempDate);
      this.user.birth_date = temp.toDateString();

      if (this.genderSelected === "Female") {
        this.user.gender = "FEMALE";
      } else if(this.genderSelected === "Male") {
        this.user.gender = "MALE";
      } else {
        this.user.gender = "OTHERS";
      }

      // if(this.facultySelected === "Art and Social Science") {
      //   this.user.faculty = FacultyType.ART;
      // } else if (this.facultySelected === "Business") {
      //   this.user.faculty = FacultyType.BUSINESS;
      // } else if (this.facultySelected === "Computing") {
      //   this.user.faculty = FacultyType.COMPUTING;
      // } else if (this.facultySelected === "Employee") {
      //   this.user.faculty = FacultyType.EMPLOYEE;
      // } else if (this.facultySelected === "Science") {
      //   this.user.faculty = FacultyType.SCIENCE;
      // } else if (this.facultySelected === "Engineering") {
      //   this.user.faculty = FacultyType.ENGINEERING;
      // } else if (this.facultySelected === "YST") {
      //   this.user.faculty = FacultyType.YST;
      // } else if (this.facultySelected === "Law") {
      //   this.user.faculty = FacultyType.LAW;
      // } else if (this.facultySelected === "Medicine") {
      //   this.user.faculty = FacultyType.MEDICINE;
      // } else if (this.facultySelected === "Dentistry") {
      //   this.user.faculty = FacultyType.DENTISTRY;
      // } else if (this.facultySelected === "Design and Environment") {
      //   this.user.faculty = FacultyType.DESIGN;
      // } else if (this.facultySelected === "Public Health") {
      //   this.user.faculty = FacultyType.HEALTH;
      // } else if (this.facultySelected === "Continuing and Lifelong") {
      //   this.user.faculty = FacultyType.LIFELONG;
      // } else if (this.facultySelected === "Integrative Science and Engineering") {
      //   this.user.faculty = FacultyType.INTEGRATIVE;
      // } else if (this.facultySelected === "Yale NUS") {
      //   this.user.faculty = FacultyType.YALE;
      // } else if (this.facultySelected === "Duke NUS") {
      //   this.user.faculty = FacultyType.DUKE;
      // } else {
      //   this.user.faculty = FacultyType.USP;
      // }

      this.user.faculty = undefined;
      this.userService.userRegister(this.user).subscribe(
        response => {
          let userId: number = response;

          if (userId != null) {
            this.sessionService.setIsLogin(true);
            this.sessionService.setCurrentUser(this.user);
            this.registerError = false;
          }
          else {
            this.registerError = true;
          }
        },
        error => {
          this.registerError = true;
          this.errorMessage = error
        }
      );
    }
    else {
    }
  }


  back() {
    this.router.navigate(["/index"]);
  }

}
