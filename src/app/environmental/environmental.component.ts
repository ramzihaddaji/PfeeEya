import { Component } from '@angular/core';

@Component({
  selector: 'app-environmental',
  templateUrl: './environmental.component.html',
  styleUrls: ['./environmental.component.css'],
})
export class EnvironmentalComponent {
  // Langue sélectionnée
  selectedLanguage: string = 'fr';

  // Traductions pour les textes
  translations: { [key: string]: { title: string; description: string } } = {
    en: {
      title: 'Environmental Underwater',
      description: 'Explore the depths of the sea and learn about underwater ecosystems.',
    },
    ar: {
      title: 'البيئة تحت الماء',
      description: 'استكشف أعماق البحار وتعرف على النظم البيئية تحت الماء.',
    },
    fr: {
      title: 'Environnement Sous-marin',
      description: 'Explorez les profondeurs de la mer et découvrez les écosystèmes sous-marins.',
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
