// ARQUIVO: frontend/app/src/app/services/produto.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

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

async uploadImage(base64Data: string, fileName: string): Promise<string> {
    const storage = getStorage();
    const storageRef = ref(storage, `products/${fileName}`);

    // Faz o upload da imagem em formato base64
    await uploadString(storageRef, base64Data, 'data_url');

    // Retorna a URL pública da imagem
    return await getDownloadURL(storageRef);
}

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