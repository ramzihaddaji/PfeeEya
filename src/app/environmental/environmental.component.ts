import { Component, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-environmental',
  templateUrl: './environmental.component.html',
  styleUrls: ['./environmental.component.css'],
})
export class EnvironmentalComponent implements OnChanges {
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
        return 'assets/environmental-fr.mp4';
      default:
        return 'assets/environmental-en.mp4';
    }
  }

  // Obtenir un texte traduit en fonction de la langue
  getTranslation(key: 'title' | 'description'): string {
    return this.translations[this.selectedLanguage][key];
  }

  // Méthode appelée lorsque la langue change
  onLanguageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedLanguage = selectElement.value;
    this.updateContent();
  }

  // Détecter les changements dans la langue sélectionnée
  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedLanguage']) {
      this.updateContent();
    }
  }

  // Mettre à jour le contenu en fonction de la langue sélectionnée
  updateContent() {
    // Mettre à jour les textes traduits
    const titleElement = document.querySelector('h1');
    const descriptionElement = document.querySelector('p');
    const videoElement = document.querySelector('video source');
    const video = document.querySelector('video');

    if (titleElement) {
      titleElement.textContent = this.getTranslation('title');
    }
    if (descriptionElement) {
      descriptionElement.textContent = this.getTranslation('description');
    }
    if (videoElement && video) {
      videoElement.setAttribute('src', this.getVideoSource());
      video.load(); // Recharger la vidéo
    }
  }
}
