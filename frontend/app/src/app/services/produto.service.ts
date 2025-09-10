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

  // ADICIONE ESTE NOVO MÉTODO
  cadastrarComFoto(produto: any, imagem: Blob | null): Observable<any> {
    const formData = new FormData();

    // 1. Adiciona os dados do produto como uma parte 'dados'
    formData.append('dados', new Blob([JSON.stringify(produto)], { type: 'application/json' }));

    // 2. Adiciona a imagem como uma parte 'imagem', se existir
    if (imagem) {
      // O nome do arquivo ('produto.jpg') é genérico, o backend irá renomear
      formData.append('imagem', imagem, 'produto.jpg');
    }

    // O HttpClient detecta o FormData e envia como 'multipart/form-data'
    return this.http.post(this.API, formData);
  }
}