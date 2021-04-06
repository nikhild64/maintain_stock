import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-palette',
  templateUrl: './theme-palette.component.html',
  styleUrls: ['./theme-palette.component.scss'],
})
export class ThemePaletteComponent implements OnInit {
  items: MenuItem[] = [];
  // currentTheme?: string;
  activeMenuIndex = 0;
  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    // this.themeService.themeSubject.subscribe((theme)=>{
    //   console.log(theme);
    //   this.currentTheme=theme;
    // });
this.createThemeList();
  }
  changeTheme(theme: string) {
    this.themeService.changeTheme(theme);
  }

  createThemeList() {
    const themes = this.themeService.logoMap;
    const keys = Object.keys(themes);
    const values = Object.values(themes);
    values.forEach((v, index) => {
      this.items.push({
        label: `<img src="assets/images/themes/${v}" alt="Indigo Light" /><p>${keys[
          index
        ]
          .replace('-', ' ')
          .toUpperCase()}</p> `,
        escape: false,
        command: () => {
          this.changeTheme(keys[index]);
        },
      });
    });
  }
}
