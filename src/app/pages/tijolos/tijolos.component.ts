import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { TijoloService, Tijolo } from 'src/app/services/tijolo.service';

@Component({
  selector: 'app-tijolos',
  templateUrl: './tijolos.component.html',
  styleUrls: ['./tijolos.component.scss']
})
export class TijolosComponent implements OnInit {
  tijolos: Tijolo[] = [];
  filtroCor: string = '';
  filtroStatus: string = '';
  filtroDefeituoso: string = '';
  buscaId: number | null = null;
  mensagemErro: string | null = null; // <-- adicionada

  novoTijolo: Partial<Tijolo> = {
    cor: '',
    furos: ''
  };

  constructor(
    private service: TijoloService,
    private notifier: NotifierService
  ) {}

  ngOnInit(): void {
    this.carregarTijolos();
  }

  carregarTijolos(): void {
    this.mensagemErro = null;

    this.service.filtrar({
      cor: this.filtroCor || undefined,
      status: this.filtroStatus || undefined,
      defeituoso: this.filtroDefeituoso !== '' ? this.filtroDefeituoso === 'true' : undefined
    }).subscribe({
      next: (data: Tijolo[]) => {
        this.tijolos = data;
      },
      error: () => {
        this.notifier.notify('error', 'Erro ao carregar os tijolos. Verifique se a API está rodando.');
      }
    });
  }

  aprovar(id: number): void {
    this.service.alterarStatus(id, 'APROVADO').subscribe({
      next: () => {
        this.notifier.notify('success', 'Tijolo aprovado com sucesso!');
        this.carregarTijolos();
      },
      error: () => {
        this.notifier.notify('error', 'Erro ao aprovar tijolo.');
      }
    });
  }

  reprovar(id: number): void {
    this.service.alterarStatus(id, 'REPROVADO').subscribe({
      next: () => {
        this.notifier.notify('warning', 'Tijolo reprovado.');
        this.carregarTijolos();
      },
      error: () => {
        this.notifier.notify('error', 'Erro ao reprovar tijolo.');
      }
    });
  }

  deletar(id: number): void {
    this.service.deletar(id).subscribe({
      next: () => {
        this.notifier.notify('info', 'Tijolo deletado com sucesso.');
        this.carregarTijolos();
      },
      error: () => {
        this.notifier.notify('error', 'Tijolo não pode ser deletado.');
      }
    });
  }

  cadastrarTijolo(): void {
    const novo = {
      cor: this.novoTijolo.cor || '',
      furos: this.novoTijolo.furos || ''
    };

    this.service.cadastrar(novo).subscribe({
      next: () => {
        this.novoTijolo = { cor: '', furos: '' };
        this.notifier.notify('success', 'Tijolo cadastrado com sucesso!');
        this.carregarTijolos();
      },
      error: () => {
        this.notifier.notify('error', 'Erro ao cadastrar tijolo.');
      }
    });
  }

  buscarPorId(): void {
    this.mensagemErro = null;

    if (this.buscaId !== null) {
      this.service.getTijoloPorId(this.buscaId).subscribe({
        next: (tijolo: Tijolo) => {
          this.tijolos = [tijolo];
          this.mensagemErro = null;
          this.notifier.notify('info', `Tijolo ID ${tijolo.id} carregado com sucesso.`);
        },
        error: () => {
          this.tijolos = [];
          this.mensagemErro = `Nenhum tijolo encontrado com o ID ${this.buscaId}.`;
        }
      });
    }
  }

  gerarAleatorio(): void {
    this.service.gerarAleatorio().subscribe({
      next: () => {
        this.notifier.notify('success', 'Tijolo aleatório criado com sucesso!');
        this.carregarTijolos();
      },
      error: () => {
        this.notifier.notify('error', 'Erro ao gerar tijolo aleatório.');
      }
    });
  }
}