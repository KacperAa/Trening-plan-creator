import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Options } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-settings',
  templateUrl: './settings.organism.html',
  styleUrls: ['./settings.organism.scss'],
})
export class SettingsComponent {
  public buttonsText: string[] = [
    'Edit Profile',
    'Account Data',
    'Language',
    'Notyfications',
  ];
  public selectedOption: string = this.buttonsText[0];
  public optionsPages: Options[] = [
    /*   {
      title: 'Edit Profile',
      form: {
        editImageData: {
          imageAdress:
            'https://material.angular.io/assets/img/examples/shiba2.jpg',
          text: 'Judasz Barabasz',
          buttonText: 'Change image',
        },
        textArea: { title: 'Biogram', matLabel: 'textArea' },
        inputs: {
          title: 'dupa',
          inputsData: [
            {
              matLabel: 'Weight',
              placeholder: '...',
              appereance: 'fill',
            },
            {
              matLabel: 'Intern',
              placeholder: '...',
              appereance: 'fill',
            },
            {
              matLabel: 'adress',
              placeholder: '...',
              appereance: 'fill',
            },
            {
              matLabel: 'adress',
              placeholder: '...',
              appereance: 'fill',
            },
            {
              matLabel: 'adress',
              placeholder: '...',
              appereance: 'fill',
            },
            {
              matLabel: 'adress',
              placeholder: '...',
              appereance: 'fill',
            },
          ],
        },
        button: 'Save',
        autocomplete: null,
        sliders: null,
      },
    }, */
    /*     {
      title: 'Account Data',
      form: {
        inputs: {
          title: 'Change password',
          inputData: [
            {
              matLabel: 'password',
              placeholder: '...',
              appereance: 'fill',
            },
            {
              matLabel: 'password',
              placeholder: '...',
              appereance: 'fill',
            },
            {
              matLabel: 'password',
              placeholder: '...',
              appereance: 'fill',
            },
          ],
        },
        button: 'Change password',
        editImageData: null,
        textArea: null,
        autocomplete: null,
        sliders: null,
      },
    }, */
    {
      title: 'Language',
      form: {
        autocomplete: {
          matLabel: 'dupa',
          placeholder: '...',
          formControl: new FormControl(),
          options: ['Pl', 'EN'],
        },
        button: 'Save',
        editImageData: null,
        textArea: null,
        inputs: null,
        sliders: null,
      },
    },
    {
      title: 'Notyfications',
      form: {
        sliders: [{ text: 'xxxxx' }, { text: 'xxxxx' }],
        button: 'Save',
        autocomplete: null,
        editImageData: null,
        textArea: null,
        inputs: null,
      },
    },
  ];

  public captureSelectedOption(option: string): void {
    this.selectedOption = option;
  }
}

/* generyczny interfejs */
