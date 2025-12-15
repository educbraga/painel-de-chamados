import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { Tickets } from './components/tickets/tickets';
import { CreateTicket } from './components/create-ticket/create-ticket';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Tickets
      },
      {
        path: 'create',
        component: CreateTicket
      }
    ]
  },
  {
    path: '**',
    component: NotFound
  }
];
