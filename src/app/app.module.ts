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
import { ContentComponent } from './content/content.component';
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
import { BannerComponent } from './UI/molecules/banner/banner.molecule';
import { PageInformationBarComponent } from './UI/atoms/page-information-bar.atom/page-information-bar.atom';
import { CommonModule, DatePipe } from '@angular/common';
import { TitleAndCheckboxComponent } from './UI/molecules/title-and-checkbox/title-and-checkbox.molecule';
import { ContentAndButtonComponent } from './UI/atoms/content-and-button/content-and-button.atom';
import { TableComponent } from './Components/table/table.component';
import { ExerciseStepsComponent } from './Components/exercise-steps/exercise-steps.component';
import { ExercisePerformedComponent } from './Components/actual-plan/exercise-performed.component';
import { InputCalendarComponent } from './Components/calendar-input/calendar-input.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DecoratedInputGroup } from './UI/molecules/decorated-input-group/decorated-input-group.molecule';
import { MatRadioModule } from '@angular/material/radio';
import { TitleAndChipsComponent } from './UI/molecules/title-and-chips/title-and-chips.molecule';
import { TitleAndRadioButtonComponent } from './UI/molecules/title-and-radio-button/title-and-radio-button.molecule';
import { DialogFormComponent } from './UI/molecules/dialog-form/dialog-form.molecule';
import { MatDialogModule } from '@angular/material/dialog';
import { EditTableComponent } from './UI/molecules/edit-table/edit-table.molecule';
import { EditColumnButtonComponent } from './UI/atoms/edit-column-button/edit-param-button.atom';
import { TimerComponent } from './UI/atoms/timer/timer.molecule';
import { LittleTitleComponent } from './UI/atoms/little-title/little-title.atom';
import { ItalicTitleComponent } from './UI/atoms/italic-title/italic-title.atom';
import { TitleOnBarComponent } from './UI/atoms/title-on-bar/title-on-bar.atom';
import { CloseButtonComponent } from './UI/atoms/close-button/close-button.atom';
import { InputFormFieldComponent } from './UI/atoms/input-form-field/input-form-field.atom';
import { HeaderLetterSpacingComponent } from './UI/atoms/header-letter-spacing/header-letter-spacing.atom';
import { DataPickerComponent } from './UI/atoms/data-picker/data-picker.atom';
import { TrackProgressComponent } from './content/track-progress/track-progress.component';
import { MatTabsBarComponent } from './Components/mat-tabs-bar/mat-tabs-bar.component';
import { TableWithSearchComponent } from './Components/table-with-search/table-with-search.component';
import { TableFinderComponent } from './Components/table-finder/table-finder.component';
import { ExerciseDataChartComponent } from './Components/exercise-data-chart/exercise-data-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RadioButtonsAndChartComponent } from './Components/radio-buttons-and-chart/radio-buttons-and-chart.component';
import { RadioDialogComponent } from './UI/atoms/radio-dialog/radio-dialog.atom';
import { ProfileComponent } from './content/profile/profile.component';
import { ProfileCardComponent } from './Components/profile-card/profile-card.component';
import { ProfileImageComponent } from './UI/atoms/profile-image/profile-image.atom';
import { ProfileListComponent } from './UI/molecules/profile-list/profile-list.component';
import { ListItemAndDividerComponent } from './Components/list-item-and-divider/list-item-and-divider.component';
import { ProfileImageAndNicknameComponent } from './UI/molecules/profile-image-and-nickname/profile-image-and-nickname.molecule';
import { LoginPanelComponent } from './content/login-panel/login-panel.component';
import { LoginFormComponent } from './UI/molecules/login-or-register-form/login-or-register.molecule';
import { RegisterComponent } from './content/register/register.component';
import { SettingsComponent } from './content/settings/settings.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OptionsFormComponent } from './UI/organisms/edit-profile/options-form.organism';
import { EditImageComponent } from './UI/molecules/edit-image/edit-image.molecule';
import { TextareaAndTitleComponent } from './UI/molecules/textarea-and-title/textarea-and-title.molecule';
import { InputAndTitleComponent } from './UI/molecules/input-and-title/input-and-title.molecule';
import { SideNavComponent } from './UI/molecules/side-nav/side-nav.molecule';

import { PlansListComponent } from './content/plans-list/plans-list.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { DateBarComponent } from './Components/date-bar/date-bar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './Components/calendar/calendar.organism';
import { TableAndBarComponent } from './UI/molecules/table-and-bar/table-and-bar.molecule';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserPanelComponent } from './Components/user-panel/user-panel.component';
import { HamburgerLogoComponent } from './Components/hamburger-logo/hamburger-logo.component';
import { AddExercise } from './Components/add-exercise/add-exercise.component';
import { MatAutocomplateComponent } from './UI/molecules/input-autocomplete/input-autocomplete.atom';
import { TitleAndAutocompleteComponent } from './UI/molecules/title-and-autocomplete/title-and-autocomplete.molecule';
import { InputAndAutocompletesSwitcherComponent } from './Components/input-and-autocomplete-switcher/input-and-autocomplete-switcher.component';
import { WeeklyAmountIncreaseComponent } from './Components/weekly-amount-increase/weekly-amount-increase.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
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
    ContentAndButtonComponent,
    TableComponent,
    ExerciseStepsComponent,
    ExercisePerformedComponent,
    InputCalendarComponent,
    DecoratedInputGroup,
    TitleAndChipsComponent,
    TitleAndRadioButtonComponent,
    DialogFormComponent,
    MatAutocomplateComponent,
    ExerciseDataChartComponent,
    EditTableComponent,
    EditColumnButtonComponent,
    TimerComponent,
    LittleTitleComponent,
    ItalicTitleComponent,
    TitleOnBarComponent,
    CloseButtonComponent,
    InputFormFieldComponent,
    HeaderLetterSpacingComponent,
    DateBarComponent,
    DataPickerComponent,
    TrackProgressComponent,
    MatTabsBarComponent,
    TableWithSearchComponent,
    TableFinderComponent,
    RadioButtonsAndChartComponent,
    RadioDialogComponent,
    ProfileComponent,
    ProfileCardComponent,
    ProfileImageComponent,
    ProfileListComponent,
    ListItemAndDividerComponent,
    ProfileImageAndNicknameComponent,
    LoginPanelComponent,
    LoginFormComponent,
    RegisterComponent,
    SettingsComponent,
    OptionsFormComponent,
    EditImageComponent,
    TextareaAndTitleComponent,
    InputAndTitleComponent,
    SideNavComponent,
    PlansListComponent,
    CalendarComponent,
    TableAndBarComponent,
    UserPanelComponent,
    HamburgerLogoComponent,
    AddExercise,
    TitleAndAutocompleteComponent,
    InputAndAutocompletesSwitcherComponent,
    WeeklyAmountIncreaseComponent,
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
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
