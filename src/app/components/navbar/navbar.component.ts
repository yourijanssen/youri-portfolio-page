import { Component, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    isMenuOpen: boolean = false;

    constructor(private renderer: Renderer2) {}

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;

        if (this.isMenuOpen) {
            this.renderer.addClass(document.body, 'menu-open');
        } else {
            this.renderer.removeClass(document.body, 'menu-open');
        }
    }

    closeMenu(): void {
        this.isMenuOpen = false;
        this.renderer.removeClass(document.body, 'menu-open');
    }
}
