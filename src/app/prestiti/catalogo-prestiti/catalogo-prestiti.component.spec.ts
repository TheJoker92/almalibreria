import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoPrestitiComponent } from './catalogo-prestiti.component';

describe('CatalogoPrestitiComponent', () => {
  let component: CatalogoPrestitiComponent;
  let fixture: ComponentFixture<CatalogoPrestitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoPrestitiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoPrestitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
