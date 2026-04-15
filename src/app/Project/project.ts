import { Component, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../api.service';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { Observable, fromEvent, Subscription  } from 'rxjs';

@Component({
  selector: 'app-project',
  imports: [MatTabsModule, FormsModule],
  templateUrl: './project.html',
  styleUrl: './project.css',
})

export class Project {

    projects: ProjectObject[] = [];
    searchString: string = "";

    constructor(private api: ApiService, private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.loadProjects();
    }

    inputChanged($event: any) {
        this.api.getProjects().subscribe(res => {
            const allProjects = res as ProjectObject[];
            this.projects = allProjects.filter(project =>
                project.name.toLowerCase().includes($event.toLowerCase())
                );
            this.cdr.detectChanges();
        });
    }

    private loadProjects() {
        this.api.getProjects().subscribe(res => {
                this.projects = res as ProjectObject[];
                this.cdr.detectChanges();
            }
        )
    }
}

class ProjectObject {
    constructor(
        public projectId: number,
        public name: string,
        public date: string,
        public difficulty: string) {
    }
}