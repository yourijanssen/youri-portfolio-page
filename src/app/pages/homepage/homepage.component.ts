// homepage.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  person = {
    name: 'Youri Janssen',
    type: 'Junior Software Developer',
    languages: ['Typescript', 'Javascript', 'HTML', 'CSS', 'SQL'],
    otherTools: [
      'NodeJs',
      'Express',
      'Mocha/Chai',
      'MySql',
      'Sequelize',
      'andMore',
    ],
    projects: ['Forum Page', 'Boat Rental', 'Collection page'], // Provide your actual projects
    github: 'https://github.com/madeliefvs',
  };
}
