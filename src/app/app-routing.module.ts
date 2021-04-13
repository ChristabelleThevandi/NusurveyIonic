import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'view-profile',
    loadChildren: () => import('./view-profile/view-profile.module').then( m => m.ViewProfilePageModule)
  },
  {
    path: 'view-transactions',
    loadChildren: () => import('./view-transactions/view-transactions.module').then( m => m.ViewTransactionsPageModule)
  },
  {
    path: 'survey-result',
    loadChildren: () => import('./survey-result/survey-result.module').then( m => m.SurveyResultPageModule)
  },
  {
    path: 'survey-description',
    loadChildren: () => import('./survey-description/survey-description.module').then( m => m.SurveyDescriptionPageModule)
  },
  {
    path: 'survey-description/:surveyId',
    loadChildren: () => import('./survey-description/survey-description.module').then( m => m.SurveyDescriptionPageModule)
  },
  {
    path: 'submit-confirmation',
    loadChildren: () => import('./submit-confirmation/submit-confirmation.module').then( m => m.SubmitConfirmationPageModule)
  },
  {
    path: 'view-filled-surveys',
    loadChildren: () => import('./view-filled-surveys/view-filled-surveys.module').then( m => m.ViewFilledSurveysPageModule)
  },
  {
    path: 'survey-page',
    loadChildren: () => import('./survey-page/survey-page.module').then( m => m.SurveyPagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
