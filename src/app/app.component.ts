import { Component } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPagesLogin = [
    { title: 'Home', url: '/index', icon: 'home' },
    { title: 'Logout', url: '/login', icon: 'exit' }
  ];

  public appPagesLogout = [
    { title: 'Home', url: '/index', icon: 'home' },
    { title: 'Login', url: '/login', icon: 'lock-closed' },
    { title: 'Register', url: '/register', icon: 'lock-closed' }
  ];

  public appPagesProfile = [
    {
      title: 'My Profile',
      url: '/view-profile',
      icon: 'add-circle'
    },
    {
      title: 'My Transactions',
      url: '/view-transactions',
      icon: 'list-circle'
    },
    {
      title: 'My Filled Surveys',
      url: '/view-filled-surveys',
      icon: 'list-circle'
    }
  ];

  constructor(public sessionService: SessionService) {
  }

  ngOnInit() {

  }
}
