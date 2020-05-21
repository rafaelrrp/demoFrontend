import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models/user';
import { UserService } from '@app/_services/user.service';
import { AuthenticationService } from '@app/_services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  loading = false;
    user: User;
    userFromApi: User;

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService
    ) {
        this.user = this.authenticationService.userValue;
    }

    ngOnInit() {
        this.loading = true;
        this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });
    }

}
