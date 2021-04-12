import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  submitted: boolean;

  constructor(private router: Router,
    public sessionService: SessionService) {
    this.submitted = false;
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(["/index"]);
  }

}
