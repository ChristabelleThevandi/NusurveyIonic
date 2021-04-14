import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';

import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {
  user : User;
  constructor(private router: Router, private userService: UserService, public sessionService: SessionService) { 
    this.user = this.sessionService.getCurrentUser();
  }

  ngOnInit() {
  }

  updateProfile() {
    this.router.navigate(["/update-profile"])
  }

  back() {
    this.router.navigate(["/index"])
  }
}
