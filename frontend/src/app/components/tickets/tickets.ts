import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { TicketService, Ticket } from '../../services/ticket';

@Component({
  selector: 'app-tickets',
  imports: [RouterModule, TableModule, ButtonModule, SkeletonModule],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets implements OnInit {
  tickets = signal<Ticket[]>([]);
  loading = signal(true);

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe({
      next: (data: Ticket[]) => {
        this.tickets.set(data);
        this.loading.set(false);
      },
      error: (error: unknown) => {
        console.error('Erro ao carregar chamados:', error);
        this.loading.set(false);
      }
    });
  }
}
