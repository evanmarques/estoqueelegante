// ARQUIVO: frontend/app/src/app/services/produto.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly API = 'http://localhost:8080/produtos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API);
  }

  // Método que já tínhamos
  cadastrarComFoto(produto: any, imagem: Blob | null): Observable<any> {
    const formData = new FormData();
    formData.append('dados', new Blob([JSON.stringify(produto)], { type: 'application/json' }));
    if (imagem) {
      formData.append('imagem', imagem, 'produto.jpg');
    }
    return this.http.post(this.API, formData);
  }

  // ADICIONE OS MÉTODOS ABAIXO
  buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.API}/${id}`);
  }

  atualizar(id: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.API}/${id}`, produto);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}