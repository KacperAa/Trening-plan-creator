import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomePageComponent } from './content/home-page/home-page.component';
import { CreatePlanComponent } from './content/create-plan/create-plan.component';
import { TodayTreningComponent } from './content/today-trening/today-trening.component';
import { TrackProgressComponent } from './content/track-progress/track-progress.component';
import { ProfileComponent } from './content/profile/profile.component';
import { LoginPanelComponent } from './content/login-panel/login-panel.component';
import { RegisterComponent } from './content/register/register.component';
import { PlansListComponent } from './content/plans-list/plans-list.component';
import { SettingsComponent } from './content/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'create-plan', component: CreatePlanComponent },
  { path: 'todays-plan', component: TodayTreningComponent },
  { path: 'track-progress', component: TrackProgressComponent },
  { path: 'your-profile', component: ProfileComponent },
  { path: 'options', component: SettingsComponent },
  { path: 'plans', component: PlansListComponent },
  { path: 'login', component: LoginPanelComponent },
  { path: 'register', component: RegisterComponent },
];

const extraOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
