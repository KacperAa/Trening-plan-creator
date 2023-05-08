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
import { SocialMediaAdressesComponent } from './UI/atoms/social-media-adresses.atom/social-media-adresses.atom';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from './UI/molecules/main-navigation.molecule/navigation.molecule';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ApplicationDescriptionBoxComponent } from './UI/atoms/application-description-box/application-description-box.atom';
import { GuidesComponent } from './UI/molecules/guide.molecule/guides.molecule';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { CreatePlanComponent } from './content/create-plan/create-plan.component';
import { MatTableModule } from '@angular/material/table';
import { TreningDayComponent } from './Components/trening-day/trening-day.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TreningPlanCreatorFormComponent } from './Components/trening-plan-creator-form/trening-plan-creator-form.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { AddExcerciseFormComponent } from './UI/organisms/form/form.organism';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodayTreningComponent } from './content/today-trening/today-trening.component';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { TreeOfPlansComponent } from './Components/tree-of-plans/tree-of-plans.component';
import { WelcomeBannerAtomComponent } from './UI/atoms/welcome-banner.atom/welcome-banner.molecule';
import { PageInformationBarComponent } from './UI/atoms/page-information-bar.atom/page-information-bar.atom';
import { HeaderAndTextComponent } from './UI/atoms/header-and-text.atom/header-and-text/header-and-text.atom';
import { CommonModule } from '@angular/common';
import { TreningParamCheckboxComponent } from './UI/molecules/title-and-checkbox/title-and-checkbox.molecule';
import { ContentAndButtonComponent } from './UI/atoms/content-and-button/content-and-button.atom';
import { TableComponent } from './UI/templates/table/table.template';
import { ModifiableTableComponent } from './Components/modifiable-table/modifiable-table.component';
import { StepperComponent } from './UI/molecules/stepper/stepper.molecule';
import { AssignExFormComponent } from './Components/assign-ex-form/assign-ex-form.component';
import { InputCalendarComponent } from './UI/atoms/input-calendar/field-input-calendar.molecule';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormFieldComponent } from './UI/molecules/form-field/form-field.molecule';
import { MatRadioModule } from '@angular/material/radio';
import { TitleAndChipsComponent } from './UI/molecules/title-and-chips/title-and-chips.molecule';
import { TitleAndRadioButtonComponent } from './UI/molecules/title-and-radio-button/title-and-radio-button.molecule';
import { DialogFormComponent } from './UI/molecules/dialog-form/dialog-form.molecule';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocomplateComponent } from './UI/molecules/input-autocomplete/input-autocomplete.molecule';
import { EditTableComponent } from './UI/molecules/edit-table/edit-table.molecule';
import { EditColumnButtonComponent } from './UI/atoms/edit-column-button/edit-param-button.atom';
import { TimerComponent } from './UI/atoms/timer/timer.molecule';
import { LittleTitleComponent } from './UI/atoms/little-title/little-title.atom';
import { ItalicTitleComponent } from './UI/atoms/italic-title/italic-title.atom';
import { TitleOnBarComponent } from './UI/atoms/title-on-bar/title-on-bar.atom';
import { CloseButtonComponent } from './UI/atoms/close-button/close-button.atom';
import { InputNgModelComponent } from './UI/atoms/input-ng-model/input-ng-model.atom';
import { InputFormFieldComponent } from './UI/atoms/input-form-field/input-form-field.atom';
import { HeaderLetterSpacingComponent } from './UI/atoms/header-letter-spacing/header-letter-spacing.atom';
import { AutocompleteComponent } from './UI/atoms/autocomplete/autocomplete.atom';
import { InputPartingDecorationComponent } from './UI/atoms/input-parting-decoration/input-parting-decoration.atom';
import { TableBarComponent } from './UI/organisms/bar-and-data-field/bar-and-data-field.organism';
import { TextAndIconButtonComponent } from './UI/molecules/text-and-icon-button/text-and-icon-button.molecule';
import { DataPickerComponent } from './UI/atoms/data-picker/data-picker.atom';
import { TrackProgressComponent } from './content/track-progress/track-progress.component';
import { MatTabsBarComponent } from './Components/mat-tabs-bar/mat-tabs-bar.component';
import { TableWithSearchComponent } from './Components/table-with-search/table-with-search.component';
import { TableFinderComponent } from './UI/atoms/table-finder/table-finder.atom';
import { ExerciseDataChartComponent } from './UI/atoms/exercise-data-chart/exercise-data-chart.atom';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RadioButtonsAndChartComponent } from './UI/organisms/radio-buttons-and-chart/radio-buttons-and-chart.organism';
import { MatRadioButtonComponent } from './UI/atoms/mat-radio-button/mat-radio-button.atom';
import { ViewPlanComponent } from './content/view-plan/view-plan.component';
import { ProfileComponent } from './content/profile/profile.component';
import { ProfileCardComponent } from './UI/organisms/profile-card/profile-card.organism';
import { ProfileImageComponent } from './UI/atoms/profile-image/profile-image.atom';
import { ListComponent } from './UI/molecules/list/list.molecule';
import { ListItemAndDividerComponent } from './UI/molecules/list-item-and-divider/list-item-and-divider.molecule';
import { ProgileImageAndNicknameComponent } from './UI/molecules/progile-image-and-nickname/progile-image-and-nickname.molecule';
import { LoginPanelComponent } from './content/login-panel/login-panel.component';
import { LoginFormComponent } from './UI/molecules/login-or-register-form/login-or-register.molecule';
import { RegisterComponent } from './content/register/register.component';
import { SettingsComponent } from './UI/organisms/settings/settings.organism';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OptionsFormComponent } from './UI/organisms/edit-profile/options-form.organism';
import { EditImageComponent } from './UI/molecules/edit-image/edit-image.molecule';
import { TextareaAndTitleComponent } from './UI/molecules/textarea-and-title/textarea-and-title.molecule';
import { InputAndTitleComponent } from './UI/molecules/input-and-title/input-and-title.molecule';
import { AutocompleteAndTitleComponent } from './UI/molecules/autocomplete-and-title/autocomplete-and-title.molecule';
import { SideNavComponent } from './UI/molecules/side-nav/side-nav.molecule';
import { OptionsComponent } from './UI/templates/table/options/options.template';
import { PlansListComponent } from './content/plans-list/plans-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomePageComponent,
    SocialMediaAdressesComponent,
    NavigationComponent,
    ApplicationDescriptionBoxComponent,
    GuidesComponent,
    CreatePlanComponent,
    PageInformationBarComponent,
    TreningDayComponent,
    TreningPlanCreatorFormComponent,
    AddExcerciseFormComponent,
    TodayTreningComponent,
    TreeOfPlansComponent,
    WelcomeBannerAtomComponent,
    HeaderAndTextComponent,
    TreningParamCheckboxComponent,
    ContentAndButtonComponent,
    TableComponent,
    ModifiableTableComponent,
    StepperComponent,
    AssignExFormComponent,
    InputCalendarComponent,
    FormFieldComponent,
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
    InputNgModelComponent,
    InputFormFieldComponent,
    HeaderLetterSpacingComponent,
    AutocompleteComponent,
    InputPartingDecorationComponent,
    TableBarComponent,
    TextAndIconButtonComponent,
    DataPickerComponent,
    TrackProgressComponent,
    MatTabsBarComponent,
    TableWithSearchComponent,
    TableFinderComponent,
    RadioButtonsAndChartComponent,
    MatRadioButtonComponent,
    ViewPlanComponent,
    ProfileComponent,
    ProfileCardComponent,
    ProfileImageComponent,
    ListComponent,
    ListItemAndDividerComponent,
    ProgileImageAndNicknameComponent,
    LoginPanelComponent,
    LoginFormComponent,
    RegisterComponent,
    SettingsComponent,
    OptionsFormComponent,
    EditImageComponent,
    TextareaAndTitleComponent,
    InputAndTitleComponent,
    AutocompleteAndTitleComponent,
    SideNavComponent,
    OptionsComponent,
    PlansListComponent,
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
    DragDropModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
