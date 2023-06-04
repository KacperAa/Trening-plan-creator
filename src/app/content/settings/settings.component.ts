import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Options } from 'src/app/Interfaces/options.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
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
    {
      title: 'Edit Profile',
      form: {
        editImageData: {
          imageAdress:
            'https://material.angular.io/assets/img/examples/shiba2.jpg',
          text: 'Judasz Barabasz',
          buttonText: 'Change image',
        },
        textArea: { title: 'Biogram', matLabel: 'textArea' },
        inputsAndTitles: [
          {
            title: 'Weight',
            inputData: {
              matLabel: 'Weight',
              placeholder: '...',
              appereance: 'fill',
            },
          },
          {
            title: 'Intern',
            inputData: {
              matLabel: 'Intern',
              placeholder: '...',
              appereance: 'fill',
            },
          },

          {
            title: 'Adress',
            inputData: {
              matLabel: 'adress',
              placeholder: '...',
              appereance: 'fill',
            },
          },
        ],
        autocomplete: null,
        sliders: null,
        button: 'Save',
      },
    },

    {
      title: 'Account Data',
      form: {
        inputsAndTitles: [
          {
            title: 'Password',
            inputData: {
              matLabel: 'password',
              placeholder: '...',
              appereance: 'fill',
            },
          },
          {
            title: 'Password',
            inputData: {
              matLabel: 'password',
              placeholder: '...',
              appereance: 'fill',
            },
          },
        ],
        button: 'Change password',
        editImageData: null,
        textArea: null,
        autocomplete: null,
        sliders: null,
      },
    },

    {
      title: 'Language',
      form: {
        autocomplete: {
          title: 'Lang',
          autocomplete: {
            matLabel: 'Language',
            placeholder: '...',
            formControl: new FormControl(),
            options: ['Pl', 'EN'],
          },
        },
        button: 'Save',
        editImageData: null,
        textArea: null,
        inputsAndTitles: null,
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
        inputsAndTitles: null,
      },
    },
  ];

  public selectOption(text: string): void {
    this.selectedOption = text;
  }
  public captureSelectedOption(option: string): void {
    this.selectedOption = option;
  }
}

/* generyczny interfejs */
