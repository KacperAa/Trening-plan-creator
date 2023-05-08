import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomePageComponent } from './content/home-page/home-page.component';
import { CreatePlanComponent } from './content/create-plan/create-plan.component';
import { TodayTreningComponent } from './content/today-trening/today-trening.component';
import { TrackProgressComponent } from './content/track-progress/track-progress.component';
import { ProfileComponent } from './content/profile/profile.component';
import { LoginPanelComponent } from './content/login-panel/login-panel.component';
import { RegisterComponent } from './content/register/register.component';
import { OptionsComponent } from './UI/templates/table/options/options.template';
import { PlansListComponent } from './content/plans-list/plans-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'create-plan', component: CreatePlanComponent },
  { path: 'your-plans', component: TodayTreningComponent },
  { path: 'track-progress', component: TrackProgressComponent },
  { path: 'your-profile', component: ProfileComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'login', component: LoginPanelComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'plans', component: PlansListComponent },
];

const extraOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
