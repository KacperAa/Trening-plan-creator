import { TitleAndAutocomplete } from './title-and-autocomplete.interface';
import { MatSlider } from './mat-slider.interface';
import { EditImage } from './edit-image.interface';
import { TitleAndTextArea } from './title-and-text-area.interface';
import { InputAndTitle } from './input-and-title.interface';

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
