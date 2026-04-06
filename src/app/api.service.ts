import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {}

    getProjects() {
        return this.http.get('https://clientsidebackend-hraxa5eha9ctc9hv.canadacentral-01.azurewebsites.net/api/Portfolio/Projects');
    }
}