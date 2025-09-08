import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoEditarPage } from './produto-editar.page';

describe('ProdutoEditarPage', () => {
  let component: ProdutoEditarPage;
  let fixture: ComponentFixture<ProdutoEditarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
