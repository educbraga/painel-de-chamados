import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-header',
  imports: [RouterModule, ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
