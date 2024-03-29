import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomePageComponent } from './content/home-page/home-page.component';
import { SocialMediaAdressesComponent } from './UI/atoms/icon-link/icon-link.atom';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from './UI/molecules/main-navigation.molecule/navigation.molecule';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TextBoxComponent } from './UI/molecules/text-box/text-box.molecule';
import { GuidesComponent } from './UI/molecules/guide.molecule/guides.molecule';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { CreatePlanComponent } from './content/create-plan/create-plan.component';
import { MatTableModule } from '@angular/material/table';
import { TreningDayComponent } from './Components/trening-day/trening-day.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TreningPlanCreatorComponent } from './Components/trening-plan-creator/trening-plan-creator.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { TodayTreningComponent } from './content/today-trening/today-trening.component';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { BannerComponent } from './Components/banner/banner.component';
import { PageInformationBarComponent } from './UI/atoms/page-information-bar.atom/page-information-bar.atom';
import { CommonModule, DatePipe } from '@angular/common';
import { TitleAndCheckboxComponent } from './UI/molecules/title-and-checkbox/title-and-checkbox.molecule';
import { TableComponent } from './Components/table/table.component';
import { ExerciseStepsComponent } from './Components/exercise-steps/exercise-steps.component';
import { ExercisePerformedComponent } from './Components/actual-plan/exercise-performed.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DecoratedInputGroup } from './UI/molecules/decorated-input-group/decorated-input-group.molecule';
import { MatRadioModule } from '@angular/material/radio';
import { TitleAndChipsComponent } from './UI/molecules/title-and-chips/title-and-chips.molecule';
import { TitleAndRadioButtonComponent } from './UI/molecules/title-and-radio-button/title-and-radio-button.molecule';
import { DialogFormComponent } from './UI/molecules/dialog-form/dialog-form.molecule';
import { MatDialogModule } from '@angular/material/dialog';
import { TimerComponent } from './UI/atoms/timer/timer.molecule';
import { TitleOnBarComponent } from './UI/atoms/title-on-bar/title-on-bar.atom';
import { CloseButtonComponent } from './UI/atoms/close-button/close-button.atom';
import { InputFormFieldComponent } from './UI/atoms/input-form-field/input-form-field.atom';
import { TrackProgressComponent } from './content/track-progress/track-progress.component';
import { MatTabsBarComponent } from './Components/mat-tabs-bar/mat-tabs-bar.component';
import { TableWithSearchComponent } from './Components/table-with-search/table-with-search.component';
import { TableFinderComponent } from './Components/table-finder/table-finder.component';
import { ExerciseDataChartComponent } from './Components/exercise-data-chart/exercise-data-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RadioButtonsAndChartComponent } from './Components/radio-buttons-and-chart/radio-buttons-and-chart.component';
import { ProfileComponent } from './content/profile/profile.component';
import { ProfileCardComponent } from './Components/profile-card/profile-card.component';
import { ProfileImageComponent } from './UI/atoms/profile-image/profile-image.atom';
import { ProfileListComponent } from './UI/molecules/profile-list/profile-list.component';
import { ListItemAndDividerComponent } from './Components/list-item-and-divider/list-item-and-divider.component';
import { ProfileImageAndNicknameComponent } from './UI/molecules/profile-image-and-nickname/profile-image-and-nickname.molecule';
import { LoginPanelComponent } from './content/login-panel/login-panel.component';
import { RegisterComponent } from './content/register/register.component';
import { SettingsComponent } from './content/settings/settings.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OptionsFormComponent } from './Components/options-page/options-page.component';
import { EditImageComponent } from './UI/molecules/edit-image/edit-image.molecule';
import { TextareaAndTitleComponent } from './Components/textarea-and-title/textarea-and-title.component';
import { InputAndTitleComponent } from './UI/molecules/input-and-title/input-and-title.molecule';
import { PlansListComponent } from './content/plans-list/plans-list.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { DateBarComponent } from './Components/date-bar/date-bar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './Components/calendar/calendar.component';
import { TableAndBarComponent } from './Components/table-and-bar/table-and-bar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserPanelComponent } from './Components/user-panel/user-panel.component';
import { HamburgerLogoComponent } from './Components/hamburger-logo/hamburger-logo.component';
import { AddExercise } from './Components/add-exercise/add-exercise.component';
import { MatAutocomplateComponent } from './UI/molecules/input-autocomplete/input-autocomplete.atom';
import { TitleAndAutocompleteComponent } from './UI/molecules/title-and-autocomplete/title-and-autocomplete.molecule';
import { InputAndAutocompletesSwitcherComponent } from './Components/input-and-autocomplete-switcher/input-and-autocomplete-switcher.component';
import { WeeklyAmountIncreaseComponent } from './Components/weekly-amount-increase/weekly-amount-increase.component';
import { CalendarTableComponent } from './Components/calendar-table/calendar-table.component';
import { CheckboxAndAgreementComponent } from './Components/checkbox-and-agreement/checkbox-and-agreement.component';
import { DialogWithDateFieldComponent } from './Components/dialog-with-date-field/dialog-with-date-field.component';
import { DynamicFormControlComponent } from './Components/dynamic-form-control/dynamic-form-control.component';
import { DynamicFormComponent } from './Components/dynamic-form/dynamic-form.component';
import { TrackWinWidthDirective } from './Directives/window-size-class.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    SocialMediaAdressesComponent,
    NavigationComponent,
    TextBoxComponent,
    GuidesComponent,
    CreatePlanComponent,
    PageInformationBarComponent,
    TreningDayComponent,
    TreningPlanCreatorComponent,
    TodayTreningComponent,
    BannerComponent,
    TitleAndCheckboxComponent,
    TableComponent,
    ExerciseStepsComponent,
    ExercisePerformedComponent,
    DecoratedInputGroup,
    TitleAndChipsComponent,
    TitleAndRadioButtonComponent,
    DialogFormComponent,
    MatAutocomplateComponent,
    ExerciseDataChartComponent,
    TimerComponent,
    TitleOnBarComponent,
    CloseButtonComponent,
    InputFormFieldComponent,
    DateBarComponent,
    TrackProgressComponent,
    MatTabsBarComponent,
    TableWithSearchComponent,
    TableFinderComponent,
    RadioButtonsAndChartComponent,
    ProfileComponent,
    ProfileCardComponent,
    ProfileImageComponent,
    ProfileListComponent,
    ListItemAndDividerComponent,
    ProfileImageAndNicknameComponent,
    LoginPanelComponent,
    RegisterComponent,
    SettingsComponent,
    OptionsFormComponent,
    EditImageComponent,
    TextareaAndTitleComponent,
    InputAndTitleComponent,
    PlansListComponent,
    CalendarComponent,
    TableAndBarComponent,
    UserPanelComponent,
    HamburgerLogoComponent,
    AddExercise,
    TitleAndAutocompleteComponent,
    InputAndAutocompletesSwitcherComponent,
    WeeklyAmountIncreaseComponent,
    CalendarTableComponent,
    CheckboxAndAgreementComponent,
    DialogWithDateFieldComponent,
    DynamicFormControlComponent,
    DynamicFormComponent,
    TrackWinWidthDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatChipsModule,
    FormsModule,
    MatSelectModule,
    MatListModule,
    MatTreeModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatDialogModule,
    NgxChartsModule,
    MatSlideToggleModule,
    MatBottomSheetModule,
    FullCalendarModule,
    MatTooltipModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
