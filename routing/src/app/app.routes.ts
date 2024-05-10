import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {path: '', title:'', component:HomeComponent},
    {path: 'about', title:'About Us', component:AboutComponent},
    {path: 'contact', title:'Contact Us', component:ContactComponent},
    {path: '**', title:'Page not found', component:PagenotfoundComponent},
    
];
