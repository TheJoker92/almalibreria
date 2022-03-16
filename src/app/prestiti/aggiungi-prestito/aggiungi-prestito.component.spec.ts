import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiPrestitoComponent } from './aggiungi-prestito.component';

describe('AggiungiPrestitoComponent', () => {
  let component: AggiungiPrestitoComponent;
  let fixture: ComponentFixture<AggiungiPrestitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiPrestitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiPrestitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
