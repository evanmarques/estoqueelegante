import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getStorage, ref, uploadString, getDownloadURL} from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
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

  cadastrar(produto: any): Observable<any> {
    return this.http.post(this.apiUrl, produto);
  }

    // Busca um único produto pelo seu ID
  buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }

  // Envia os dados atualizados para o backend
  atualizar(id: number, produto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, produto);
  }

  // Envia o pedido de exclusão para o backend
  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

async uploadImage(base64Data: string, fileName: string): Promise<string> {
    const storage = getStorage();
    const storageRef = ref(storage, `products/${fileName}`);

    // Faz o upload da imagem em formato base64
    await uploadString(storageRef, base64Data, 'data_url');

    // Retorna a URL pública da imagem
    return await getDownloadURL(storageRef);
}

}