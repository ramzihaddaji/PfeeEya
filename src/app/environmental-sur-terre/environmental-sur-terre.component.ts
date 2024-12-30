import { Component } from '@angular/core';

@Component({
  selector: 'app-environmental-sur-terre',
  templateUrl: './environmental-sur-terre.component.html',
  styleUrls: ['./environmental-sur-terre.component.css']
})
export class EnvironmentalSurTerreComponent {

  translations: { [key: string]: { title: string; description: string } } = {
    en: {
      title: 'Environmental on Land',
      description: 'Discover the diversity of ecosystems on land and learn about their importance.',
    },
    ar: {
      title: 'البيئية على الأرض',
      description: 'استكشف تنوع النظم البيئية على اليابسة وتعرف على أهميتها.',
    },
    fr: {
      title: 'Environnemental Sur Terre',
      description: 'Découvrez la diversité des écosystèmes terrestres et leur importance.',
    },
  };

  

  selectedLanguage: string = 'en';
  
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
