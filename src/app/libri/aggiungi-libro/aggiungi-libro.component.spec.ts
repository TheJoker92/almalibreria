import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiLibroComponent } from './aggiungi-libro.component';

describe('AggiungiLibroComponent', () => {
  let component: AggiungiLibroComponent;
  let fixture: ComponentFixture<AggiungiLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiLibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
