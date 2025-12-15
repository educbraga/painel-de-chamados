import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { MessageModule } from 'primeng/message';
import { SkeletonModule } from 'primeng/skeleton';
import { TicketService, Category } from '../../services/ticket';

@Component({
  selector: 'app-create-ticket',
  imports: [
    RouterModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    SelectModule,
    MessageModule,
    SkeletonModule
  ],
  templateUrl: './create-ticket.html',
  styleUrl: './create-ticket.css',
})
export class CreateTicket implements OnInit {
  form: FormGroup;
  categories = signal<Category[]>([]);
  loadingCategories = signal(true);
  errorMessage = signal('');

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.ticketService.getCategories().subscribe({
      next: (data: Category[]) => {
        this.categories.set(data);
        this.loadingCategories.set(false);
      },
      error: (error: unknown) => {
        console.error('Erro ao carregar categorias:', error);
        this.loadingCategories.set(false);
      }
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.errorMessage.set('');
      this.ticketService.createTicket(this.form.value).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (error: unknown) => {
          this.errorMessage.set('Erro ao criar chamado. Tente novamente.');
          console.error('Erro ao criar chamado:', error);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.form.get(fieldName);
    if (field?.hasError('required') && field?.touched) {
      const fieldNames: { [key: string]: string } = {
        'title': 'Título',
        'description': 'Descrição',
        'category': 'Categoria'
      };
      return `${fieldNames[fieldName] || fieldName} é obrigatório`;
    }
    return '';
  }
}
