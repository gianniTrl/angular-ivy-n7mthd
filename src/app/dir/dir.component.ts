import { Component, OnInit } from '@angular/core';

enum Lang {
  IT = 'IT',
  EN = 'EN',
  ES = 'ES',
}

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.css'],
})
export class DirComponent implements OnInit {
  Lang = Lang;

  paneVisibility: boolean;
  currentLanguage: Lang;

  langs: Lang[] = [Lang.IT, Lang.EN, Lang.ES];
  greetings = {
    IT: 'Ciao',
    EN: 'Hello',
    ES: 'Hola',
  };

  constructor() {}

  ngOnInit() {
    this.currentLanguage = Lang.IT;
    this.paneVisibility = true;
  }

  onLanguageSelect(language: Lang): void {
    this.currentLanguage = language;
  }

  onPaneVisibilityToggle(): void {
    this.paneVisibility = !this.paneVisibility;
  }
}
