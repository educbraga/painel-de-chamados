import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-not-found',
  imports: [RouterModule, ButtonModule],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {}
