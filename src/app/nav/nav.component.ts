import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  selectedValue: string | null = null;

  displayValue(value: string) {
    this.selectedValue = value;
  }

  showSelected() {
    if (this.selectedValue) {
      alert(`Valeur sélectionnée : ${this.selectedValue}`);
    } else {
      alert('Aucune valeur sélectionnée.');
    }
  }

}
