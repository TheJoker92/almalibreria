import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiAutoreComponent } from './aggiungi-autore.component';

describe('AggiungiAutoreComponent', () => {
  let component: AggiungiAutoreComponent;
  let fixture: ComponentFixture<AggiungiAutoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiAutoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiAutoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
