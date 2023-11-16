// projects.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Forum page',
      description:
        'A forum page where users can post and comment on posts related to Sustainability.',
      technologies: 'React, JavaScript, CSS',
      url: 'https://example.com/project2',
      img1: 'assets/AngularAmigosSite/angularAmgigosPage1.png',
      img2: 'assets/AngularAmigosSite/AngularAmgigosPage2.png',
      img3: 'assets/AngularAmigosSite/AngularAmigosPage3.png',
    },
    {
      name: 'Boat Rental',
      description: 'A webshop where users can rent boats.',
      technologies:
        'Angular, TypeScript, CSS, Node.js, Express.js, MySQL, Sequelize, Sinon, Mocha, Chai, Git, GitKeb, Thunderclient',
      url: 'https://example.com/project2',
      img1: 'assets/BoatRentelSite/BootverhuurP1.png',
      img2: 'assets/BoatRentelSite/BootverhuurP2.png',
      img3: 'assets/BoatRentelSite/BootverhuurP3.png',
    },
    {
      name: 'Crowdfunding page',
      description: 'A page where users can donate money for the care of lamas.',
      technologies: 'React, JavaScript, CSS',
      url: 'https://example.com/project2',
      img1: 'assets/MayoLamaSite/MayoLamaP1.png',
      img2: 'assets/MayoLamaSite/MayoLamaP2.png',
      img3: 'assets/MayoLamaSite/MayoLamaP3.png',
    },
    // Add more projects as needed
  ];
}
