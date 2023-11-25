import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectComponent } from './components/project/project.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        AboutComponent,
        HomepageComponent,
        ContactComponent,
        ProjectsComponent,
        SocialLinkComponent,
        FooterComponent,
        ProjectComponent,
        InfoComponent
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
