import { Component } from '@angular/core';
import { Project } from '../Project/project';

@Component({
  selector: 'app-projects',
  imports: [Project],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {}