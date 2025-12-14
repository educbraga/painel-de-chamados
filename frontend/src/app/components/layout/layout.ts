import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, Header, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
