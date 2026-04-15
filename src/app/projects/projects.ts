import { Component } from '@angular/core';
import { Project } from '../Project/project';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-projects',
  imports: [Project, MatTabsModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {}