import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-environmental-sur-terre',
  templateUrl: './environmental-sur-terre.component.html',
  styleUrls: ['./environmental-sur-terre.component.css']
})
export class EnvironmentalSurTerreComponent implements OnChanges {

  // Langue sélectionnée
    selectedLanguage: string = 'fr';
  
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