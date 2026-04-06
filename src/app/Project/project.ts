import { Component, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
})

export class Project {

    projects: ProjectObject[] = []

    constructor(private api: ApiService, private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.loadProjects();
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