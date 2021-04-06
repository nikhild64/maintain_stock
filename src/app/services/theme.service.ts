import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme='bootstrap4-light-blue';
  themeSubject=new Subject<string>();
  logoMap = {
    'bootstrap4-light-blue': 'bootstrap4-light-blue.svg',
    'bootstrap4-light-purple': 'bootstrap4-light-purple.svg',
    'bootstrap4-dark-blue': 'bootstrap4-dark-blue.svg',
    'bootstrap4-dark-purple': 'bootstrap4-dark-purple.svg',
    'md-light-indigo': 'md-light-indigo.svg',
    'md-light-deeppurple': 'md-light-deeppurple.svg',
    'md-dark-indigo': 'md-dark-indigo.svg',
    'md-dark-deeppurple': 'md-dark-deeppurple.svg',
    'mdc-light-indigo': 'md-light-indigo.svg',
    'mdc-light-deeppurple': 'md-light-deeppurple.svg',
    'mdc-dark-indigo': 'md-dark-indigo.svg',
    'mdc-dark-deeppurple': 'md-dark-deeppurple.svg',
    'saga-blue': 'saga-blue.png',
    'saga-green': 'saga-green.png',
    'saga-orange': 'saga-orange.png',
    'saga-purple': 'saga-purple.png',
    'vela-blue': 'vela-blue.png',
    'vela-green': 'vela-green.png',
    'vela-orange': 'vela-orange.png',
    'vela-purple': 'vela-purple.png',
    'arya-blue': 'arya-blue.png',
    'arya-green': 'arya-green.png',
    'arya-orange': 'arya-orange.png',
    'arya-purple': 'arya-purple.png',
    nova: 'nova.png',
    'nova-alt': 'nova-alt.png',
    'nova-accent': 'nova-accent.png',
    'luna-blue': 'luna-blue.png',
    'luna-green': 'luna-green.png',
    'luna-pink': 'luna-pink.png',
    'luna-amber': 'luna-amber.png',
    rhea: 'rhea.png',
    'fluent-light': 'fluent-light.png'

};
  constructor() {
    const localTheme=localStorage.getItem('apptheme');
    if(localTheme){
      this.themeSubject.next(localTheme);
      this.currentTheme = localTheme;

    }
    else{
      this.themeSubject.next(this.currentTheme);

    }
    this.changeTheme(this.currentTheme);

   }

  changeTheme(theme: string){
    const themeElement = document.getElementById('theme-id-main');
    themeElement?.setAttribute(
      'href',`./assets/themes/${theme}/theme.css`
    );
    this.setChangedThemeToLocal(theme);
    this.currentTheme = theme;
  }
  setChangedThemeToLocal(theme: string){
    localStorage.setItem('apptheme',theme);
    this.themeSubject.next(theme);

  }

}
