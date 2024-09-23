import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib594Component } from './lib594.component';

describe('Lib594Component', () => {
  let component: Lib594Component;
  let fixture: ComponentFixture<Lib594Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib594Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
