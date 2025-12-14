import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { Tickets } from './components/tickets/tickets';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Tickets
      }
    ]
  }
];
