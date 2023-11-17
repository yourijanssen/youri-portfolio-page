// homepage.component.ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
    person = {
        name: 'Youri Janssen',
        type: 'Junior Software Developer',
        languages: ['Typescript', 'Javascript', 'HTML', 'CSS', 'SQL'],
        otherTools: ['NodeJs', 'Express', 'Mocha/Chai', 'MySql', 'Sequelize', 'andMore'],
        projects: ['Forum Page', 'Boat Rental', 'Collection page'], // Provide your actual projects
        github: 'https://github.com/madeliefvs'
    };

    projects = [
        {
            name: 'Crowdfunding page',
            description:
                'This was the first project I ever did. I had a lot of fun learning about the early web development era, before any frameworks were used. During this time I learned where web development started and how recent technologies have improved the workflow, structure and developer friendlyness. My contributions to the project were limited to simple HTML and CSS code. I also created some basic SQL queries to retrieve and post data from the database.',
            descriptionProject:
                'A page where users can donate money for the care of lamas. State: Finished',

            technologies:
                'VSCode, Plain HTML, CSS, JavaScript/Typescript, NPM, tsc (typescript compiler), MVC Pattern, Git, Gitlab,  MySQL Workbench, Nodemon',
            url: 'https://github.com/yourijanssen/MayoLama',
            img1: 'assets/MayoLamaSite/MayoLamaP1.png'
        },
        {
            name: 'Forum page',
            description:
                'During this project I struggled with learning and implementing coding principles. Altough I understood how I could get a good looking end result, my code was still of poor quality. I needed to learn more about the 4 pillars of OOP, using Design Patterns (like strategy, factory and singleton) and proper implementation of the Angular, NodeJs and testing frameworks.',
            descriptionProject:
                'A forum page where users can post and comment on posts related to the 17 Sustainable Development Goals defined by the United Nations. State: Finished',

            technologies:
                'Angular, Node.js, Express.js, Sequelize, Mocha, Chai, Thunderclient, EsLint, Prettier, ts-node-dev, dotenv, mysql2',
            url: 'https://github.com/yourijanssen/AngularAmigos',
            img1: 'assets/AngularAmigosSite/angularAmgigosPage1.png'
        },
        {
            name: 'Boat Rental',
            description:
                'This is my most recent project and the one I am most proud of. In this project I could show of all the skills I obtained during my education so far. In this project I created the registration process of a user and the search functionality. All of the back and frontend code is thoroughly tested using unit, integration and E2E testing techniques.',
            descriptionProject:
                'A webshop where users can rent boats. State: Unfinished (my part is done)',

            technologies:
                'REST API, Sequelize-Typescript, Sinon, Jasmine, Karma, Github, RxJs, Argon2, bycrypt, supertest, cookies',
            url: 'https://github.com/yourijanssen/boat-rental',
            img1: 'assets/BoatRentelSite/BootverhuurP1.png'
        }
    ];
}
