import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-environmental-en-air',
  templateUrl: './environmental-en-air.component.html',
  styleUrls: ['./environmental-en-air.component.css']
})
export class EnvironmentalEnAirComponent implements OnChanges {

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