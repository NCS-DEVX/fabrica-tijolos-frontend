import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TijolosComponent } from './tijolos.component';

describe('TijolosComponent', () => {
  let component: TijolosComponent;
  let fixture: ComponentFixture<TijolosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TijolosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TijolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
