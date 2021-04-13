import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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
    console.log(form);
  }
}
