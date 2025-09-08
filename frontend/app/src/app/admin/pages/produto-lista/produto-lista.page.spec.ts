import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoListaPage } from './produto-lista.page';

describe('ProdutoListaPage', () => {
  let component: ProdutoListaPage;
  let fixture: ComponentFixture<ProdutoListaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
