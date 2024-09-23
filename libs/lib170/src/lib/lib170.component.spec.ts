import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib170Component } from './lib170.component';

describe('Lib170Component', () => {
  let component: Lib170Component;
  let fixture: ComponentFixture<Lib170Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib170Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
