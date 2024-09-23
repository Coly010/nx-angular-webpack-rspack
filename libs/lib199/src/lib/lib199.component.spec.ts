import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib199Component } from './lib199.component';

describe('Lib199Component', () => {
  let component: Lib199Component;
  let fixture: ComponentFixture<Lib199Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib199Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
