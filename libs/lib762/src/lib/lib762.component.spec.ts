import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib762Component } from './lib762.component';

describe('Lib762Component', () => {
  let component: Lib762Component;
  let fixture: ComponentFixture<Lib762Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib762Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
