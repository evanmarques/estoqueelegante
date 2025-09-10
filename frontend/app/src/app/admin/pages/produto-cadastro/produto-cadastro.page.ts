
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.page.html',
  styleUrls: ['./produto-cadastro.page.scss'],
})
export class ProdutoCadastroPage implements OnInit {
  form: FormGroup;
  fotoUrl: string | null = null;
  fotoBlob: Blob | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router,
    private toastController: ToastController
  ) {
    // Inicializa o formulário com validações
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      descricao: [''],
      preco: [null, [Validators.required, Validators.min(0)]],
      quantityStock: [null, [Validators.required, Validators.min(0)]],
      codigobarras: ['', Validators.required],
    });
  }

  ngOnInit() {}

  async selecionarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt,
        promptLabelHeader: 'Escolha uma opção',
        promptLabelPhoto: 'Usar Galeria',
        promptLabelPicture: 'Tirar Foto',
      });

      if (image && image.webPath) {
        this.fotoUrl = image.webPath;
        const response = await fetch(image.webPath);
        this.fotoBlob = await response.blob();
      }
    } catch (error) {
      console.error('Erro ao selecionar foto', error);
      this.presentToast('Não foi possível selecionar a imagem.');
    }
  }

  salvar() {
    if (this.form.invalid) {
      this.presentToast('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const dadosProduto = this.form.value;
    this.produtoService.cadastrarComFoto(dadosProduto, this.fotoBlob).subscribe({
      next: () => {
        this.presentToast('Produto cadastrado com sucesso!');
        this.router.navigate(['/admin/produtos']);
      },
      error: (err: any) => {
        console.error('Erro ao cadastrar produto', err);
        this.presentToast('Erro ao cadastrar produto. Tente novamente.');
      }
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}