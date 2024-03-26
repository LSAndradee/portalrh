import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuAberto: boolean = false;
  iconeMenu: string = 'menu'; // Ícone inicial

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    if (!this.menuAberto) {
      return;
    }

    const targetElement = event.target as HTMLElement;
    if (!targetElement.closest('.custom-menu-overlay') && !targetElement.closest('.menu-icon')) {
      this.menuAberto = false;
      this.iconeMenu = 'menu'; // Alterna entre ícones
    }
  }

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
    this.iconeMenu = this.menuAberto ? 'close' : 'menu'; // Alterna entre ícones
  }

}
