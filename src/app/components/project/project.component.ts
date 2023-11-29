// projects.component.ts
import { Component, OnInit } from '@angular/core';

interface Project {
    name: string;
    description: string;
    descriptionProject: string;
    technologies: string;
    url: string;
    images: string[];
    imagesMobile: string[];
}

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
    projects: Project[] = [
        {
            name: '[ Crowdfunding page ]',
            description:
                'This was the first project I ever did. I had a lot of fun learning about the early web development era, before any frameworks were used. During this time I learned where web development started and how recent technologies have improved the workflow, structure and developer friendlyness. My contributions to the project were limited to simple HTML and CSS code. I also created some basic SQL queries to retrieve and post data from the database.',
            descriptionProject:
                'A page where users can donate money for the care of lamas. State: Finished',

            technologies:
                'VSCode, Plain HTML, CSS, JavaScript/Typescript, NPM, tsc (typescript compiler), MVC Pattern, Git, Gitlab,  MySQL Workbench, Nodemon, Figma',
            url: 'https://github.com/yourijanssen/MayoLama',
            images: [
                'assets/MayoLamaSite/MayoLamaP1.png',
                'assets/MayoLamaSite/MayoLamaP2.png',
                'assets/MayoLamaSite/MayoLamaP3.png'
            ],
            imagesMobile: [
                'assets/MayoLamaSite/MayoLamaP1.png',
                'assets/MayoLamaSite/MayoLamaP2.png',
                'assets/MayoLamaSite/MayoLamaP3.png'
            ]
        },
        {
            name: '[ Forum page ]',
            description:
                'During this project I struggled with learning and implementing coding principles. Altough I understood how I could get a good looking end result, my code was still of poor quality. I needed to learn more about the 4 pillars of OOP, using Design Patterns (like strategy, factory and singleton) and proper implementation of the Angular, NodeJs and testing frameworks.',
            descriptionProject:
                'A forum page where users can post and comment on posts related to the 17 Sustainable Development Goals defined by the United Nations. State: Finished',

            technologies:
                'Angular, Node.js, Express.js, Sequelize, Mocha, Chai, Thunderclient, EsLint, Prettier, ts-node-dev, dotenv, mysql2',
            url: 'https://github.com/yourijanssen/AngularAmigos',
            images: [
                'assets/AngularAmigosSite/angularAmgigosPage1.png',
                'assets/AngularAmigosSite/angularAmgigosPage2.png',
                'assets/AngularAmigosSite/angularAmgigosPage3.png'
            ],
            imagesMobile: [
                'assets/AngularAmigosSite/angularAmgigosPage1.png',
                'assets/AngularAmigosSite/angularAmgigosPage2.png',
                'assets/AngularAmigosSite/angularAmgigosPage3.png'
            ]
        },
        {
            name: '[ Boat Rental ]',
            description:
                'This is my most recent project and the one I am most proud of. In this project I could show of all the skills I obtained during my education so far. In this project I created the registration process of a user and the search functionality. All of the back and frontend code is thoroughly tested using unit, integration and E2E testing techniques.',
            descriptionProject:
                'A webshop where users can rent boats. State: Unfinished (my part is done)',

            technologies:
                'REST API, Sequelize-Typescript, Sinon, Jasmine, Karma, Github, RxJs, Argon2, bycrypt, supertest, cookies',
            url: 'https://github.com/yourijanssen/boat-rental',
            images: [
                'assets/BoatRentelSite/avontuurDesktop1.png',
                'assets/BoatRentelSite/avontuurDesktop2.png',
                'assets/BoatRentelSite/avontuurDesktop3.png'
            ],
            imagesMobile: [
                'assets/BoatRentelSite/avontuurMobile1.png',
                'assets/BoatRentelSite/avontuurMobile2.png',
                'assets/BoatRentelSite/avontuurMobile3.png'
            ]
        }
        // Add more projects as needed
    ];

    getImages(project: Project): string[] {
        return window.innerWidth < 800 ? project.imagesMobile : project.images;
    }

    currentProject: Project = this.projects[0]; // Initialize currentProject with the first project
    currentImageIndex = 0;

    ngOnInit(): void {
        // Start the slideshow when the component initializes
        this.startSlideshow();
    }

    startSlideshow(): void {
        setInterval(() => {
            this.showNextImage();
        }, 3500); // Change image every 5 seconds (adjust as needed)
    }

    showNextImage(): void {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.currentProject.images.length;
    }
}
