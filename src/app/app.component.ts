import { Component, NgModule } from '@angular/core';
import { Palavra } from './palavra';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  palavra: Palavra = new Palavra();
  palavras: Palavra[] = [];

  saveData(form) {
    const isRepeat = this.verifyRepeat();

    if (isRepeat) {
      return;
    }

    this.palavras.push(this.palavra);
    this.palavra = new Palavra();
  }

  verifyRepeat() {
    const verifyRepeat = this.palavras.map(
      (plv) => plv.palavra === this.palavra.palavra
    );

    return verifyRepeat;
  }
}
