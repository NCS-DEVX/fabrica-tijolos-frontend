import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesTijoloComponent } from './detalhes-tijolo.component';

describe('DetalhesTijoloComponent', () => {
  let component: DetalhesTijoloComponent;
  let fixture: ComponentFixture<DetalhesTijoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesTijoloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesTijoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
