import { Component } from '@angular/core';

import { User, Role } from './_models';
import { AuthenticationService } from './_services/authentication.service';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: User;

    constructor(private authenticationService: AuthenticationService) {
        this.authenticationService.user.subscribe(x => this.user = x);
    }

    get isAdmin() {
        return this.user && this.user.role === Role.Admin;
    }

    logout() {
        this.authenticationService.logout();
    }
}