import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebook, faGoogle, faMicrosoft, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

interface socialMedia {
  icon: IconDefinition;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  icons: socialMedia[] = [
    { icon: faFacebook },
    { icon: faGoogle },
    { icon: faMicrosoft },
    { icon: faTwitter }
  ];

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.login(this.form.value).subscribe(() => {
      console.log('logeado');
      this.router.navigateByUrl('/')
    })
  }

  loginWith(icon: any) {
    const { iconName: provider } = icon;
    window.location.href = `http://localhost:3000/api/auth/${provider}`;
    // this.authService.loginWith(provider).subscribe(() => {
    //   console.log('logueado con', provider);
    //   this.router.navigateByUrl('/');
    // })
  }
}
