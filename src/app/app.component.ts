import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropdown';



  options: Array<{ name: { [key in 'en' | 'fr']: string }, value: string, description: { [key in 'en' | 'fr']: string } }> = [
    {
      name: { en: 'IND', fr: 'IND' }, value: 'IND',
      description: { en: 'India', fr: 'Indieea' }
    },
    {
      name: { en: 'AFG', fr: 'AFG' }, value: 'AFG',
      description: { en: 'Afghanistan', fr: "l'Afghanistan" }
    },
    {
      name: { en: 'ICE', fr: 'ICE' }, value: 'ICE',
      description: { en: 'Iceland', fr: "l'Inde" }
    }
  ];
  selectedOption: any;
  selectedValue: any;
  showOptions = false;

  language: 'en' | 'fr' = 'en';
  changeLanguage(lang: 'en' | 'fr') {
    this.language = lang;
  }


  onOptionSelected(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedOption = this.options.find(option => option.value === target.value);
  }

  clearInput() {
    this.selectedValue = null;
    this.selectedOption = null;
}
}
