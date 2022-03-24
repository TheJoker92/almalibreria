import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';
import { LoaderService } from '../services/loader.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private httpService: HttpServiceService,
              private loaderService: LoaderService,
              private userService: UserService,
              private router: Router) {}

  ngOnInit(): void {
  }

  login() {
    this.loaderService.display = true

    if (this.form.valid) {

      this.httpService.login(this.form.value).subscribe({
        next: (user: any) => {
          this.loaderService.display = false
          this.router.navigate(['/libri']);

          this.userService.user = user
        },
        error: (error: any) => {
  
          this.loaderService.display = false    
          window.alert("Accesso non effettuato correttamente, controllare i campi")
        }
      })
    } else {
      window.alert("Inserire tutti i campi")
    }
  }

}
