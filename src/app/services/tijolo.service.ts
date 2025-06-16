import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tijolo {
  id: number;
  cor: string;
  furos: string;
  status: string;
  defeituoso: boolean | null;
}

@Injectable({
  providedIn: 'root'
})
export class TijoloService {
  private apiUrl = 'http://localhost:8080/tijolos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Tijolo[]> {
    return this.http.get<Tijolo[]>(this.apiUrl);
  }

  filtrar(filtro: any): Observable<Tijolo[]> {
    let params = new HttpParams();

    if (filtro.cor) {
      params = params.set('cor', filtro.cor);
    }
    if (filtro.status && filtro.status !== 'undefined') {
      params = params.set('status', filtro.status);
    }
    if (filtro.defeituoso !== undefined) {
      params = params.set('defeituoso', filtro.defeituoso);
    }

    return this.http.get<Tijolo[]>(`${this.apiUrl}/filtro`, { params });
  }

  alterarStatus(id: number, status: string): Observable<Tijolo> {
    return this.http.put<Tijolo>(`${this.apiUrl}/${id}/status?status=${status}`, {});
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  cadastrar(tijolo: Partial<Tijolo>): Observable<Tijolo> {
    return this.http.post<Tijolo>(this.apiUrl, tijolo);
  }

  getTijoloPorId(id: number): Observable<Tijolo> {
    return this.http.get<Tijolo>(`${this.apiUrl}/${id}`);
  }

  buscarPorId(id: number): Observable<Tijolo> {
    return this.http.get<Tijolo>(`${this.apiUrl}/${id}`);
  }

  gerarAleatorio(): Observable<Tijolo> {
    return this.http.post<Tijolo>(`${this.apiUrl}/aleatorio`, {});
  }

  gerarRelatorio(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/relatorio`);
  }
}