import { InputAndTitle, TitleAndAutocomplete } from './interfaces';
import { MatSlider } from './mat-slider.interface';
import { EditImage } from './edit-image.interface';
import { TitleAndTextArea } from './title-and-text-area.interface';

export interface Options {
  title: string;
  form: OptionsForm;
}

export interface OptionsForm {
  editImageData: EditImage | null;
  textArea: TitleAndTextArea | null;
  inputsAndTitles: InputAndTitle[] | null;
  autocomplete: TitleAndAutocomplete | null;
  sliders: MatSlider[] | null;
  button: string | null;
}
