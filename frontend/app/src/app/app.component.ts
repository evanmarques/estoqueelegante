// ARQUIVO: frontend/app/src/app/app.component.ts

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true, // O componente agora é oficialmente standalone
  imports: [IonicModule, CommonModule, RouterLink], // Ele importa o que precisa para o template
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/tabs/tab1', icon: 'home' },
    { title: 'Admin', url: '/admin', icon: 'cog' },
  ];
  constructor() {}
}