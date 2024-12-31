import { Component } from '@angular/core';

@Component({
  selector: 'app-environmental-en-air-ar',
  templateUrl: './environmental-en-air-ar.component.html',
  styleUrls: ['./environmental-en-air-ar.component.css']
})
export class EnvironmentalEnAirArComponent {
 // Langue sélectionnée
 selectedLanguage: string = 'fr';

 // Traductions pour les textes
 translations: { [key: string]: { title: string; description: string } } = {
  en: {
    title: 'Environmental in Air',
    description: 'Discover the skies and learn about ecosystems in the air.',
  },
  ar: {
    title: 'البيئية في الهواء',
    description: 'اكتشف السماء وتعرف على النظم البيئية في الهواء.',
  },
  fr: {
    title: 'Environnemental En Air',
    description: 'Découvrez le ciel et explorez les écosystèmes aériens.',
  },
};


 // Retourner la source de la vidéo
 getVideoSource(): string {
   switch (this.selectedLanguage) {
     case 'ar':
       return 'assets/environmental-ar.mp4';
     case 'fr':
       return 'assets/environmental-en.mp4';
     default:
       return 'assets/environmental-fr.mp4';
   }
 }

 // Obtenir un texte traduit en fonction de la langue
 getTranslation(key: 'title' | 'description'): string {
   return this.translations[this.selectedLanguage][key];
 }

}
