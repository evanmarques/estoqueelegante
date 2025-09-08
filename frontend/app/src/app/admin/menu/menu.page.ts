import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true, // Importante: Definindo como standalone
  imports: [IonicModule, CommonModule, FormsModule, RouterModule] // Importando dependências
})
export class MenuPage {

  constructor() { }

}