import { Component } from '@angular/core';
import { AuthModule } from '../auth.module';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  constructor(public authService: AuthService){}

}