import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  // Corrigido para corresponder ao backend
  quantidadeEstoque: number;
  barcode: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly apiUrl = 'http://localhost:8080/produtos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  // NOVO MÉTODO ADICIONADO AQUI
  cadastrar(produto: any): Observable<any> {
    return this.http.post(this.apiUrl, produto);
  }
}