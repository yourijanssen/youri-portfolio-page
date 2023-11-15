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
    },
    {
      name: 'Boat Rental',
      description: 'A webshop where users can rent boats.',
      technologies:
        'Angular, TypeScript, CSS, Node.js, Express.js, MySQL, Sequelize, Sinon, Mocha, Chai, Git, GitKeb, Thunderclient',
      url: 'https://example.com/project2',
    },
    {
      name: 'Collection page',
      description:
        'A page where users can view and edit their collection of items.',
      technologies: 'React, JavaScript, CSS',
      url: 'https://example.com/project2',
    },
    // Add more projects as needed
  ];
}
