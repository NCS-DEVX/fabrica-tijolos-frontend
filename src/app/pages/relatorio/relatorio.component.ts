import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { TijoloService } from 'src/app/services/tijolo.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {
  dados: RelatorioDTO | null = null;

  constructor(
    private service: TijoloService,
    private notifier: NotifierService
  ) {}

  ngOnInit(): void {
    this.carregarRelatorio();
  }

  carregarRelatorio(): void {
    this.service.gerarRelatorio().subscribe({
      next: (res: RelatorioDTO) => {
        this.dados = res;
      },
      error: () => {
        this.notifier.notify('error', 'Erro ao carregar relatório.');
      }
    });
  }
}

interface RelatorioDTO {
  totalTijolos: number;
  totalAprovados: number;
  totalReprovados: number;
  totalEmInspecao: number;
  totalDefeituosos: number;
  totalAprovadosComDefeito: number;

  brancosFurosPares: number;
  brancosFurosImpares: number;
  pretosFurosPares: number;
  pretosFurosImpares: number;

  totalBrancos: number;
  totalPretos: number;
}