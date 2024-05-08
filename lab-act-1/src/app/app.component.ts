import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationComponent } from './education/education.component';
import { TrainingComponent } from './training/training.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ReferencesComponent } from './references/references.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonalInfoComponent, EducationComponent, TrainingComponent, WorkExperienceComponent, ReferencesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab-act-1';
  msg = 'Hi! Welcome to my Resume!';
  name = 'Calvin La Madrid';
  initials = 'CLM';

}


