import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export default class Home {

}
