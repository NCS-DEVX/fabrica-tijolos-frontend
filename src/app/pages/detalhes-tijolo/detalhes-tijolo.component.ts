import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tijolo, TijoloService } from 'src/app/services/tijolo.service';

@Component({
  selector: 'app-detalhes-tijolo',
  templateUrl: './detalhes-tijolo.component.html',
  styleUrls: ['./detalhes-tijolo.component.scss']
})
export class DetalhesTijoloComponent implements OnInit {
  tijolo?: Tijolo;

  constructor(
    private route: ActivatedRoute,
    private service: TijoloService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.buscarPorId(+id).subscribe({
        next: (dados) => this.tijolo = dados,
        error: () => alert('Tijolo não encontrado.')
      });
    }
  }
}
