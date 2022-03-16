import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoAutoriComponent } from './catalogo-autori.component';

describe('CatalogoAutoriComponent', () => {
  let component: CatalogoAutoriComponent;
  let fixture: ComponentFixture<CatalogoAutoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoAutoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoAutoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
