import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ButtonModule, InputTextModule, TextareaModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export default class Home {}
