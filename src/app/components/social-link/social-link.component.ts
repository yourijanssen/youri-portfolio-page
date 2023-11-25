import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-social-link',
    templateUrl: './social-link.component.html',
    styleUrls: ['./social-link.component.css']
})
export class SocialLinkComponent {
    @Input() link: string | undefined;
    @Input() iconUrl: string | undefined;
}
