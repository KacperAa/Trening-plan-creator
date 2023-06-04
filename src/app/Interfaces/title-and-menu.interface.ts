export interface TitleAndMenu {
  title: string;
  menu: Menu[];
  icon: string | null;
  routerLink: string | null;
}
export interface Menu {
  title: string;
  routerLink: string;
}
