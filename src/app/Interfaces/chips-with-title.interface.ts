export interface ChipsWithTitle {
  title: string;
  chips: Chips[];
}

export interface Chips {
  text: string;
  selected?: boolean;
}
