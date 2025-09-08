import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoCadastroPage } from './produto-cadastro.page';

describe('ProdutoCadastroPage', () => {
  let component: ProdutoCadastroPage;
  let fixture: ComponentFixture<ProdutoCadastroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
